import {
  SimulationRunStatus,
  EnvironmentVariable,
  Purpose,
  SimulationRunOutputDatumElement,
} from '@biosimulations/datamodel/common';

export interface UnknownSimulation {
  id: string;
  name?: null;
  email?: null;
  submittedLocally?: null;
  simulator?: null;
  simulatorVersion?: null;
  simulatorDigest?: null;
  cpus?: null;
  memory?: null; // GB
  maxTime?: null; // min
  envVars?: null;
  purpose?: null;
  status?: null;
  statusReason?: undefined;
  runtime?: null;
  submitted?: null;
  updated?: null;
  resultsSize?: null;
  projectSize?: null;
}

export interface Simulation {
  id: string;
  name: string;
  email?: string;
  submittedLocally?: boolean;
  simulator: string;
  simulatorVersion: string;
  simulatorDigest: string;
  cpus: number;
  memory: number; // GB
  maxTime: number; // min
  envVars: EnvironmentVariable[];
  purpose: Purpose;
  status: SimulationRunStatus;
  statusReason?: string;
  runtime?: number;
  submitted: Date;
  updated: Date;
  resultsSize?: number;
  projectSize?: number;
}

export type ISimulation = Simulation | UnknownSimulation;

export function isUnknownSimulation(
  simulation: Simulation | UnknownSimulation,
): boolean {
  return simulation.status === undefined || simulation.status === null;
}

export interface SedDatasetResults {
  uri: string;
  id: string;
  location: string;
  outputId: string;
  label: string;
  values: SimulationRunOutputDatumElement[];
}

export interface SedOutputResults {
  uri: string;
  id: string;
  datasets: SedDatasetResults[];
}

export interface SedDocumentResults {
  uri: string;
  location: string;
  outputs: SedOutputResults[];
}

export type CombineResults = SedDocumentResults[];

export interface SedDatasetResultsMap {
  [uri: string]: SedDatasetResults;
}
