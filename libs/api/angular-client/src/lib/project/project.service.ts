import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Endpoints } from '@biosimulations/config/common';
import {
  Project,
  ProjectInput,
  ProjectSummary,
  File as IFile,
  SimulatorIdNameMap,
  SimulationRunSedDocument,
  ISimulator,
} from '@biosimulations/datamodel/common';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private endpoints = new Endpoints();

  constructor(private http: HttpClient) {}

  public isProjectValid(
    projectInput: ProjectInput,
    validateSimulationResultsData = false,
    validateIdAvailable = false,
    validateSimulationRunNotPublished = false,
  ): Observable<true | string> {
    return this.http
      .post<void>(this.endpoints.getValidateProjectEndpoint(), projectInput, {
        headers: { 'Content-Type': 'application/json' },
        params: {
          validateSimulationResultsData,
          validateIdAvailable,
          validateSimulationRunNotPublished,
        },
      })
      .pipe(
        map((): true => true),
        catchError((error: HttpErrorResponse): Observable<string> => {
          if (error.status === HttpStatusCode.BadRequest) {
            return of(error.error.error[0].detail);
          } else {
            return throwError(error);
          }
        }),
        shareReplay(1),
      );
  }

  public publishProject(projectInput: ProjectInput): Observable<Project> {
    const url = this.endpoints.getProjectsEndpoint();
    const response = this.http
      .post<Project>(url, projectInput, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(shareReplay(1));
    return response;
  }

  public getAllProjects(): Observable<Project[]> {
    const url = this.endpoints.getProjectsEndpoint();
    const response = this.http.get<Project[]>(url).pipe(shareReplay(1));
    return response;
  }

  public getProject(projectId: string): Observable<Project> {
    const url = this.endpoints.getProjectsEndpoint(projectId);
    const response = this.http.get<Project>(url).pipe(shareReplay(1));
    return response;
  }

  public getProjectSummaries(): Observable<ProjectSummary[]> {
    const url = this.endpoints.getProjectSummariesEndpoint();
    const response = this.http.get<ProjectSummary[]>(url).pipe(shareReplay(1));
    return response;
  }

  public getProjectSummary(projectId: string): Observable<ProjectSummary> {
    const url = this.endpoints.getProjectSummariesEndpoint(projectId);
    const response = this.http.get<ProjectSummary>(url).pipe(shareReplay(1));
    return response;
  }

  public getProjectFile(id: string, file: string) {
    const url = this.endpoints.getSimulationRunFileEndpoint(id, file);
    return this.http.get(url);
  }

  public getArchiveContents(id: string): Observable<IFile[]> {
    const url = this.endpoints.getArchiveContentsEndpoint(id);
    const response = this.http.get<IFile[]>(url).pipe();
    return response;
  }

  public getProjectSedmlContents(
    id: string,
  ): Observable<SimulationRunSedDocument[]> {
    const url = this.endpoints.getSpecificationsEndpoint(id);
    const response = this.http.get<SimulationRunSedDocument[]>(url).pipe();
    return response;
  }

  public getSimulatorIdNameMap(): Observable<SimulatorIdNameMap> {
    const endpoint = this.endpoints.getSimulatorsEndpoint(undefined, 'latest');
    return this.http.get<ISimulator[]>(endpoint).pipe(
      map((simulators: ISimulator[]): SimulatorIdNameMap => {
        const idNameMap: SimulatorIdNameMap = {};
        simulators.forEach((simulator: ISimulator): void => {
          idNameMap[simulator.id] = simulator.name;
        });
        return idNameMap;
      }),
      shareReplay(1),
    );
  }

  public addFileToCombineArchive(
    archiveFileOrUrl: File | string,
    newContentLocation: string,
    newContentFormat: string,
    newContentMaster: boolean,
    newContentFile: Blob,
    overwriteLocations = false,
    download = false,
  ): Observable<ArrayBuffer | string> {
    const formData = new FormData();

    if (typeof archiveFileOrUrl === 'object') {
      formData.append('files', archiveFileOrUrl);
      formData.append(
        'archive',
        JSON.stringify({ filename: archiveFileOrUrl.name }),
      );
    } else {
      formData.append('archive', JSON.stringify({ url: archiveFileOrUrl }));
    }

    const newContentFilename = '__new_content__';
    formData.append('files', newContentFile, newContentFilename);

    formData.append(
      'newContent',
      JSON.stringify({
        _type: 'CombineArchiveContent',
        location: newContentLocation,
        format: newContentFormat,
        master: newContentMaster,
        filename: newContentFilename,
      }),
    );

    formData.append('overwriteLocations', JSON.stringify(overwriteLocations));
    formData.append('download', JSON.stringify(download));

    const headers = {
      Accept: 'application/zip',
    };

    return this.http.post<string>(
      this.endpoints.getAddFileToCombineArchiveEndpoint(),
      formData,
      {
        headers: headers,
        responseType: 'json',
      },
    );
  }
}
