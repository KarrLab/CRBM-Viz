import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@biosimulations/shared/environments';
import { Subject } from 'rxjs';
import { urls } from '@biosimulations/config/common';
@Injectable({
  providedIn: 'root',
})
export class DispatchService {
  uuidUpdateEvent = new Subject<string>();
  uuidsDispatched: Array<string> = [];

  submitJob(
    fileToUpload: File,
    selectedSimulator: string,
    selectedVersion: string,
    name: string,
    email: string
  ) {
    const endpoint = `${urls.dispatchApi}/dispatch`;

    // TODO: Create a datamodel to hold the schema for simulation spec for frontend
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('simulator', selectedSimulator);
    formData.append('simulatorVersion', selectedVersion);
    formData.append('authorEmail', email);
    formData.append('nameOfSimulation', name);
    console.log(formData);
    // formData.append('name', name);
    // formData.append('email', email);
    return this.http.post(endpoint, formData);
  }

  getAllSimulatorInfo(simulatorName?: string) {
    const endpoint = `${urls.dispatchApi}/simulators`;
    if (simulatorName === undefined) {
      return this.http.get(endpoint);
    }
    return this.http.get(`${endpoint}?name=${simulatorName}`);
  }

  getSimulationLogs(uuid: string) {
    const endpoint = `${urls.dispatchApi}/logs/${uuid}?download=false`;
    return this.http.get(endpoint);
  }

  constructor(private http: HttpClient) {}
}
