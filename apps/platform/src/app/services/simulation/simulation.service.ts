import { Injectable } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Simulation, ISimulation, isUnknownSimulation } from '../../datamodel';
import { SimulationRunStatus, File as CommonFile } from '@biosimulations/datamodel/common';
import { SimulationStatusService } from './simulation-status.service';
import { Storage } from '@ionic/storage-angular';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Observable, BehaviorSubject, combineLatest, throwError, of } from 'rxjs';
import { ConfigService } from '@biosimulations/config/angular';
import { concatAll, debounceTime, shareReplay, map, catchError } from 'rxjs/operators';
import { SimulationRun } from '@biosimulations/datamodel/common';
import { Endpoints } from '@biosimulations/config/common';
import { SimulationRunService } from '@biosimulations/angular-api-client';

export interface ReRunQueryParams {
  projectUrl?: string;
  simulator?: string;
  simulatorVersion?: string;
  runName?: string;
  //files: CommonFile[];
  files: string;
}

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  private key = 'simulations';
  private simulations: ISimulation[] = [];
  public reRunQueryParams: Subject<ReRunQueryParams> = new Subject();
  public reRunObservable!: Observable<ReRunQueryParams>;
  public reRunTriggered = false;

  // Memory/HTTP cache
  private simulationsMap$: { [key: string]: BehaviorSubject<ISimulation> } = {};
  private simulationsMapSubject = new BehaviorSubject(this.simulationsMap$);
  private simulationsArrSubject = new BehaviorSubject<ISimulation[]>([]);
  // Local Storage Map
  private simulationsMap: { [key: string]: ISimulation } = {};
  private storageInitialized = false;
  private simulationsAddedBeforeStorageInitialized: ISimulation[] = [];

  private _storage: Storage | null = null;

  private endpoints = new Endpoints();

  public constructor(
    private config: ConfigService,
    private storage: Storage,
    private httpClient: HttpClient,
    private simRunHttpService: SimulationRunService,
    private router: Router,
  ) {
    this.initStorage();
  }

  public async initStorage() {
    this._storage = await this.storage.create();

    if ((await this._storage.keys()).includes(this.key)) {
      let simulations: ISimulation[] = await this._storage.get(this.key);
      simulations = this.parseDates(simulations);
      this.initSimulations(simulations);
    } else {
      this.initSimulations([]);
    }

    this.createSimulationsArray();
  }

  // Add the new rerunProject method

  public rerunProject(id: string): void {
    /*
      - Get Simulation Run data along with simulation run archive files array
      - Use fetched data to instantiate router Params as ReRunQueryParams
      - Navigate to dispatch, emitting ReRunQueryParams
     */
    const simulationRun$ = this.httpClient.get<SimulationRun>(this.endpoints.getSimulationRunEndpoint(true, id));

    const filesContent$ = this.httpClient
      .get(this.endpoints.getSimulationRunFilesEndpoint(true, id), { responseType: 'text' })
      .pipe(map((content) => JSON.parse(content) as CommonFile[]));

    forkJoin({ simulationRun: simulationRun$, filesContent: filesContent$ }).subscribe(
      ({ simulationRun, filesContent }) => {
        const queryParams: ReRunQueryParams = {
          projectUrl: this.endpoints.getSimulationRunDownloadEndpoint(true, id),
          simulator: simulationRun.simulator,
          simulatorVersion: simulationRun.simulatorVersion,
          runName: simulationRun.name + ' (rerun)',
          files: JSON.stringify(filesContent),
        };

        filesContent.forEach((item) => {
          console.log(`AN ITEM: ${item.id}`);
        });
        // Handling the promise returned by navigate
        this.router
          .navigate(['/runs/new'], { queryParams: queryParams })
          .then((success) => {
            if (success) {
              console.log('Navigation successful!');
            } else {
              console.log('Navigation failed!');
            }
          })
          .catch((error) => console.error('Navigation error:', error));
      },
    );
  }

  /*public _rerunProject(id: string): void {
    this.httpClient
      .get<SimulationRun>(this.endpoints.getSimulationRunEndpoint(true, id))
      .subscribe((simulationRun: SimulationRun): void => {
        const queryParams: ReRunQueryParams = {
          projectUrl: this.endpoints.getSimulationRunDownloadEndpoint(true, id),
          simulator: simulationRun.simulator,
          simulatorVersion: simulationRun.simulatorVersion,
          runName: simulationRun.name + ' (rerun)',
        };

        this.reRunQueryParams.next(queryParams);
        this.reRunObservable = this.reRunQueryParams.asObservable();
        this.reRunTriggered = true;
        this.reRunObservable.subscribe((item) => {
          console.log(`What is subscribed: ${item.simulator}`);
        });
        console.log(`RUN OBSERVABLE SET! ${this.reRunObservable}. REURN SET: ${this.reRunTriggered}`);
        this.router.navigate(['/runs/new'], { queryParams: queryParams });
      });
  }*/

  private setReRunEvent(queryParams: ReRunQueryParams) {
    this.reRunQueryParams.next(queryParams);
    this.reRunObservable = this.reRunQueryParams.asObservable();
    this.reRunTriggered = true;
    this.reRunObservable.subscribe((item) => {
      console.log(`What is subscribed: ${item.simulator}`);
    });
    console.log(`RUN OBSERVABLE SET! ${this.reRunObservable}. REURN SET: ${this.reRunTriggered}`);
  }

  private parseDates(simulations: ISimulation[]) {
    simulations.forEach((simulation: ISimulation): void => {
      if (typeof simulation.submitted === 'string') {
        simulation.submitted = new Date(simulation.submitted);
      }
      if (typeof simulation.updated === 'string') {
        simulation.updated = new Date(simulation.updated);
      }
    });
    return simulations;
  }

  /**
   * Subscribes to the map of the simulators creates and observable list of simulators.
   * This simplifies returning the simulators.
   * @see getSimulations
   */
  private createSimulationsArray(): void {
    this.simulationsMapSubject.pipe(shareReplay(1)).subscribe((simulationMap) => {
      if (Object.values(simulationMap).length) {
        combineLatest(Object.values(simulationMap).map((sims) => sims.asObservable())).subscribe((arr) => {
          this.simulationsArrSubject.next(arr);
        });
      } else {
        this.simulationsArrSubject.next([]);
      }
    });
  }

  private initSimulations(storedSimulations: ISimulation[]): void {
    const simulations = storedSimulations.concat(this.simulationsAddedBeforeStorageInitialized);
    simulations.forEach((simulation: ISimulation): void => {
      // Save to local storage map
      if (!(simulation.id in this.simulationsMap)) {
        this.simulations.push(simulation);
        this.simulationsMap[simulation.id] = simulation;
      }

      // save to http map
      if (this.simulationsMap$[simulation.id]) {
        this.cacheSimulation(simulation);
      } else {
        this.simulationsMap$[simulation.id] = new BehaviorSubject(simulation);
      }
      this.simulationsMapSubject.next(this.simulationsMap$);
    });

    this.updateSimulations();

    this.storageInitialized = true;
    if (this.simulationsAddedBeforeStorageInitialized.length) {
      (this._storage as Storage).set(this.key, this.simulations);
    }
  }

  public storeNewLocalSimulation(simulation: Simulation): void {
    this.storeSimulations([simulation]);
    this.addSimulation(simulation);
  }

  public storeExistingExternalSimulations(simulations: ISimulation[]): void {
    simulations = this.parseDates(simulations);
    simulations.forEach((simulation) => {
      simulation.submittedLocally = false;
      this.addSimulation(simulation);
      this.storeSimulations([simulation]);
    });
    this.storeSimulations(simulations);
  }

  /**
   * @Author Jonathan Karr
   * @param newSimulations An array of Simulations
   *
   * Store to LOCAL storage
   */
  private storeSimulations(newSimulations: ISimulation[]): void {
    if (this._storage && this.storageInitialized) {
      newSimulations.forEach((newSimulation: ISimulation): void => {
        if (newSimulation.id in this.simulationsMap) {
          const submittedLocally = this.simulationsMap[newSimulation.id]?.submittedLocally;
          Object.assign(this.simulationsMap[newSimulation.id], newSimulation);
          this.simulationsMap[newSimulation.id].submittedLocally = submittedLocally || false;
        } else {
          this.simulations.push(newSimulation);
          this.simulationsMap[newSimulation.id] = newSimulation;
        }
      });
      this._storage.set(this.key, this.simulations);
    } else {
      newSimulations.forEach((newSimulation: ISimulation): void => {
        this.simulationsAddedBeforeStorageInitialized.push(newSimulation);
      });
    }
  }

  private updateSimulations(newSimulations: ISimulation[] = []): void {
    for (const sim of newSimulations) {
      this.updateSimulation(sim.id);
    }
    for (const sim of this.simulations) {
      this.updateSimulation(sim.id);
    }
  }

  /**
   * Delete a simulation
   */
  public removeSimulation(id: string): void {
    const simulation: ISimulation = this.simulationsMap[id];
    const iSimulation = this.simulations.indexOf(simulation);
    this.simulations.splice(iSimulation, 1);
    delete this.simulationsMap[id];
    delete this.simulationsMap$[id];
    this.simulationsMapSubject.next(this.simulationsMap$);

    this.storeSimulations([]);
  }

  /**
   * Delete all simulations
   */
  public removeSimulations(): void {
    while (this.simulations.length) {
      const simulation: ISimulation = this.simulations.pop() as ISimulation;
      delete this.simulationsMap[simulation.id];
      delete this.simulationsMap$[simulation.id];
    }
    this.simulationsMapSubject.next(this.simulationsMap$);
    this.storeSimulations([]);
  }

  public getSimulations(): Observable<ISimulation[]> {
    return this.simulationsArrSubject.asObservable().pipe(shareReplay(1));
  }

  /**
   * @author Bilal
   * @param uuid The id of the simulation
   */
  private getSimulationHttp(uuid: string): Observable<ISimulation> {
    return this.simRunHttpService.getSimulationRun(uuid, false).pipe(
      catchError((error: HttpErrorResponse): Observable<undefined> => {
        if (error.status === HttpStatusCode.NotFound) {
          return of(undefined);
        } else {
          return throwError(error);
        }
      }),
      map((dispatchSimulation: SimulationRun | undefined): ISimulation => {
        if (dispatchSimulation) {
          return {
            name: dispatchSimulation.name,
            email: dispatchSimulation.email || undefined,
            id: dispatchSimulation.id,
            runtime: dispatchSimulation?.runtime || undefined,
            status: dispatchSimulation.status as unknown as SimulationRunStatus,
            submitted: new Date(dispatchSimulation.submitted),
            submittedLocally: false,
            simulator: dispatchSimulation.simulator,
            simulatorVersion: dispatchSimulation.simulatorVersion,
            simulatorDigest: dispatchSimulation.simulatorDigest,
            cpus: dispatchSimulation.cpus,
            memory: dispatchSimulation.memory,
            maxTime: dispatchSimulation.maxTime,
            envVars: dispatchSimulation.envVars,
            purpose: dispatchSimulation.purpose,
            updated: new Date(dispatchSimulation.updated),
            resultsSize: dispatchSimulation.resultsSize,
            projectSize: dispatchSimulation.projectSize,
          };
        } else {
          return {
            id: uuid,
          };
        }
      }),
    );
  }

  /**
   * @author Bilal
   * @param uuid The id of the simulation
   * Contains the logic for the polling update.
   * Pull the simulator from cache, but add a debounce. Then, following subscription then must
   * wait some numer of seconds before firing. If the cached suimulation is still running, call
   * the http service to get the latest simulation. Then, save it to the cache Since this is
   * happening inside a subscription of the simulator from cache, saving it triggers the subscription again.
   * This will repeat until the simulator is no longer in a running state, and therefore wont be saved to the
   * cache, and wont cause a repeat. When saving it to the cache also save to local storage
   */
  private updateSimulation(uuid: string): void {
    const current = this.getSimulationFromCache(uuid).pipe(
      debounceTime(this.config.appConfig.simulationStatusRefreshIntervalSec * 1000),
    );
    current.subscribe((currentSim) => {
      if (SimulationStatusService.isSimulationStatusRunning(currentSim.status)) {
        this.getSimulationHttp(uuid).subscribe((newSim) => {
          newSim.submittedLocally = currentSim.submittedLocally || newSim.submittedLocally;
          this.storeSimulations([newSim]);
          this.cacheSimulation(newSim);
        });
      }
    });
  }
  private cacheSimulation(newSim: ISimulation): void {
    if (this.simulationsMap$[newSim.id]) {
      this.simulationsMap$[newSim.id].next(newSim);
      this.simulationsMapSubject.next(this.simulationsMap$);
    }
  }

  /**
   * @author Bilal
   * @param uuid The id of the simulation
   * Just a simple wrapper to hide the private behaviorsubjects
   */
  private getSimulationFromCache(uuid: string): Observable<ISimulation> {
    return this.simulationsMap$[uuid].asObservable().pipe(shareReplay(1));
  }

  /**
   * Add a simulation to the http cache
   * @param simulation
   */
  private addSimulation(simulation: ISimulation): boolean {
    if (!(simulation.id in this.simulationsMap$)) {
      const simSubject = new BehaviorSubject(simulation);
      this.simulationsMap$[simulation.id] = simSubject;
      this.simulationsMapSubject.next(this.simulationsMap$);
      this.updateSimulation(simulation.id);
      return true;
    } else {
      return false;
    }
  }

  /**
   * @author Bilal
   * @param uuid The id of the simulation
   * If we have the simulations in cache(a map of behavior subjects), return it, and trigger an update
   * If not, then get it via http, store it to cache, trigger an update (to start polling), and return
   * the simulator from cache. In both cases we want to return from cache. This is because the cache contains
   * behavior subjects already configured to poll the api. The recieving method can simply pipe or subscribe
   * to have the latest data.
   */
  public getSimulation(uuid: string): Observable<ISimulation> {
    if (uuid in this.simulationsMap$) {
      return this.getSimulationFromCache(uuid);
    } else {
      const sim = this.getSimulationHttp(uuid).pipe(
        map((value: ISimulation) => {
          if (isUnknownSimulation(value)) {
            return of(value);
          } else {
            // LOCAL Storage
            this.storeSimulations([value]);
            this.addSimulation(value);
            return this.getSimulationFromCache(uuid);
          }
        }),
        concatAll(),
        shareReplay(1),
      );

      return sim;
    }
  }
}
