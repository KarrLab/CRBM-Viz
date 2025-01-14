import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params, Router } from '@angular/router';

import { Storage } from '@ionic/storage-angular';
import { Observable, of, BehaviorSubject, combineLatest, throwError, switchMap } from 'rxjs';
import { catchError, map, debounceTime, shareReplay } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

import { CommonFile } from '@biosimulations/datamodel/common';
import {
  CombineArchiveSedDocSpecs,
  CombineArchiveSedDocSpecsContent,
  SedDocument,
  SedModel,
  SedSimulation,
  SedUniformTimeCourseSimulation,
} from '@biosimulations/combine-api-angular-client';
import { BIOSIMULATIONS_FORMATS } from '@biosimulations/ontology/extra-sources';
import { environment } from '@biosimulations/shared/environments';
import { ISimulation, SimulationStatusService } from '../shared-simulation-status/shared-simulation-status.service';
import { ConfigService } from '@biosimulations/config/angular';
import { SimulationRun, SimulationRunStatus, ReRunQueryParams } from '@biosimulations/datamodel/common';
import { Endpoints } from '@biosimulations/config/common';
import { SimulationRunService } from '@biosimulations/angular-api-client';

// -- SHARED INTERFACES

export type FormStepData = Record<string, unknown>;

// -- SHARED SIMULATION SERVICE IMPLEMENTATION

@Injectable({
  providedIn: 'root',
})
export class SharedSimulationService {
  private key = 'simulations';
  private simulations: ISimulation[] = [];

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
  private sedmlSpecsEndpoint = this.endpoints.getSedmlSpecificationsEndpoint(false);

  public constructor(
    private config: ConfigService,
    private storage: Storage,
    private httpClient: HttpClient,
    private simRunHttpService: SimulationRunService,
    private router: Router,
  ) {
    this.initStorage();
  }

  public async initStorage(): Promise<void> {
    this._storage = await this.storage.create();

    if ((await this._storage.keys()).includes(this.key)) {
      let simulations: ISimulation[] = await this._storage.get(this.key);
      simulations = this.parseDates(simulations);
      this.initSimulations(simulations);
    } else {
      this.initSimulations([]);
      return;
    }
    this.createSimulationsArray();
  }

  public prepareModelFile() {
    // TODO: Use model file url from ReRunQueryParams to return CombineArchiveContentUrl
  }

  public prepareSedDoc() {
    /* TODO:
        a.) make a call to introspect original sed file
        b.) use output of a to make another call to introspect editable params (params variables)
        c.) use b to populate the form (default value, new value, etc)
        d.) On user submit, detect changes if any and replace those values in c
        e.) Replace original model changes field in a with d
        f.) Return a
    */
  }

  public compileArchive() {
    // TODO: gather archive members and prepare API call submission form here.
    const formData = new FormData();
    const modelFile = this.prepareModelFile();
    const sedDoc = this.prepareSedDoc();
  }

  public createCustomArchive() {
    // TODO: make a call to combine-api/create using the output of this.compileArchive, return url/file
    this.compileArchive();
  }

  public runCustomSimulation() {
    /* TODO:
        a.) create custom archive
        b.) use a to make a call to api/run and navigate to runs/<ID>/view
    */
    const archive = this.createCustomArchive();
  }

  // original rerun project method:
  public rerunProject(id: string): void {
    this.httpClient
      .get<SimulationRun>(this.endpoints.getSimulationRunEndpoint(true, id))
      .subscribe((simulationRun: SimulationRun): void => {
        const queryParams = {
          projectUrl: this.endpoints.getSimulationRunDownloadEndpoint(true, id),
          simulator: simulationRun.simulator,
          simulatorVersion: simulationRun.simulatorVersion,
          runName: simulationRun.name + ' (rerun)',
        };
        this.router.navigate(['/runs/new'], { queryParams: queryParams });
      });
  }

  // rerun custom method
  public rerunCustomProject(id: string, rerunQueryParams?: Params | ReRunQueryParams): void {
    const simulationRun$ = this.httpClient.get<SimulationRun>(this.endpoints.getSimulationRunEndpoint(true, id));
    const filesContent$ = this.httpClient
      .get(this.endpoints.getSimulationRunFilesEndpoint(true, id), { responseType: 'text' })
      .pipe(map((content) => JSON.parse(content) as CommonFile[]));

    forkJoin({ simulationRun: simulationRun$, filesContent: filesContent$ })
      .pipe(
        switchMap(({ simulationRun, filesContent }) => {
          const projectUrl = this.endpoints.getSimulationRunDownloadEndpoint(true, id);
          const queryParams: ReRunQueryParams = {
            projectUrl: projectUrl,
            projectFileName: simulationRun.name,
            simulator: simulationRun.simulator,
            simulatorVersion: simulationRun.simulatorVersion,
            runName: simulationRun.name + ' (rerun)',
            originalRunName: simulationRun.name,
            files: JSON.stringify(filesContent),
            modelUrl: '',
            modelFile: '',
            modelFormat: '',
            simulationAlgorithm: '',
            simulationType: '',
            modelingFramework: '',
            initialTime: '',
            startTime: '',
            endTime: '',
            numSteps: '',
            metadataFile: '',
            metadataFileUrl: '',
            sedFile: '',
            sedFileUrl: '',
            imageFileUrls: [],
            modelUrls: [],
            runId: id,
          };

          // identify and set modelUrl and potentially other parameters based on filesContent analysis
          const modelFiles = [];
          filesContent.forEach((file: CommonFile, i: number) => {
            switch (file) {
              case file as CommonFile:
                //if (file.url.includes('xml') || file.url.includes('sbml') || file.url.includes('vcml')) {
                if (file.url.includes('xml') || file.url.includes('sbml')) {
                  queryParams.modelUrl = file.url;
                  queryParams.modelUrls?.push(file.url);

                  const stringFile = JSON.stringify(file);
                  modelFiles.push(stringFile);
                  queryParams.modelFile = stringFile;
                }
                if (file.url.includes('metadata')) {
                  queryParams.metadataFile = JSON.stringify(file);
                  queryParams.metadataFileUrl = file.url;
                }
                if (file.url.includes('sedml')) {
                  queryParams.sedFile = JSON.stringify(file);
                  queryParams.sedFileUrl = file.url;
                }
                if (file.url.includes('jpg') || file.url.includes('png')) {
                  queryParams.imageFileUrls?.push(file.url);
                }
                break;
            }
          });

          // fetch SED document specs and update queryParams accordingly
          return this.getSpecsOfSedDocsInCombineArchive(projectUrl).pipe(
            map((sedDocSpecs) => {
              sedDocSpecs?.contents.forEach((content: CombineArchiveSedDocSpecsContent): void => {
                const sedDoc: SedDocument = content.location.value;
                sedDoc.models.forEach((model: SedModel): void => {
                  queryParams.modelId = model.id;
                  let edamId: string | null = null;
                  for (const modelingFormat of BIOSIMULATIONS_FORMATS) {
                    const sedUrn = modelingFormat?.biosimulationsMetadata?.modelFormatMetadata?.sedUrn;
                    if (!sedUrn || !modelingFormat.id || !model.language.startsWith(sedUrn)) {
                      continue;
                    }
                    edamId = modelingFormat.id;
                    queryParams.modelFormat = edamId;
                  }
                  // queryParams.modelFormat = edamId ? edamId : 'format_2585';
                });

                sedDoc.simulations.forEach((sim: SedSimulation): void => {
                  switch (sim) {
                    case sim as SedUniformTimeCourseSimulation:
                      queryParams.initialTime = sim.initialTime;
                      queryParams.endTime = sim.outputEndTime;
                      queryParams.startTime = sim.outputStartTime;
                      queryParams.numSteps = sim.numberOfSteps;
                      queryParams.simulationAlgorithm = sim.algorithm.kisaoId;
                      queryParams.simulationType = sim._type;
                      queryParams.modelingFramework = 'SBO_0000293'; // TODO: make this dynamic
                      break;
                  }
                });
              });
              return queryParams;
            }),
          );
        }),
      )
      .subscribe((queryParams) => {
        const params = { queryParams: rerunQueryParams ? rerunQueryParams : queryParams };
        this.router
          // .navigate(['/utils/create-project'], params)
          .navigate(['/runs/customize'], params)
          .then((success) => {
            if (!success) {
              console.error('Navigation failed');
              return false;
            }
            return success;
          })
          .catch((error) => {
            throw error;
          });
      });
  }

  public getSpecsOfSedDocsInCombineArchive(
    fileOrUrl: File | string,
  ): Observable<CombineArchiveSedDocSpecs | undefined> {
    const formData = new FormData();
    if (typeof fileOrUrl === 'object') {
      formData.append('file', fileOrUrl);
    } else {
      formData.append('url', fileOrUrl);
    }

    return this.httpClient.post<CombineArchiveSedDocSpecs>(this.sedmlSpecsEndpoint, formData).pipe(
      catchError((error: HttpErrorResponse): Observable<undefined> => {
        if (!environment.production) {
          console.error(error);
        }
        return of<undefined>(undefined);
      }),
      shareReplay(1),
    );
  }

  public getSimulations(): Observable<ISimulation[]> {
    return this.simulationsArrSubject.asObservable().pipe(shareReplay(1));
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

  private parseDates(simulations: ISimulation[]): ISimulation[] {
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
}
