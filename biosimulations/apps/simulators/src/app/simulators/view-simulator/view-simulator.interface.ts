import { Observable } from 'rxjs';
import { Url, SoftwareInterfaceType } from '@biosimulations/datamodel/common';

export interface ViewAlgorithm {
  kisaoId: string;
  heading: string;
  name: string;
  description: DescriptionFragment[] | null;
  kisaoUrl: string;
  modelingFrameworks: ViewFramework[];
  modelFormats: ViewFormat[];
  simulationFormats: ViewFormat[];
  archiveFormats: ViewFormat[];
  parameters: ViewParameter[] | null;
  citations: ViewCitation[];
  availableSoftwareInterfaceTypes: string[];
}

export interface ViewAlgorithmObservable {
  kisaoId: string;
  heading: Observable<string>;
  name: Observable<string>;
  description: Observable<DescriptionFragment[]| null>;
  kisaoUrl: Observable<string>;
  modelingFrameworks: Observable<ViewFramework>[];
  modelFormats: ViewFormatObservable[];
  simulationFormats: ViewFormatObservable[];
  archiveFormats: ViewFormatObservable[];
  parameters: ViewParameterObservable[] | null;
  citations: ViewCitation[];
  availableSoftwareInterfaceTypes: string[];
}

export enum DescriptionFragmentType {
  text = 'text',
  href = 'href',
}

export interface DescriptionFragment {
  type: DescriptionFragmentType;
  value: string;
}

export interface ViewFramework {
  id: string;
  name: string;
  url: string;
}

export interface ViewFormat {
  term: ViewFormatTerm,
  version: string | null;
}

export interface ViewFormatObservable {
  term: Observable<ViewFormatTerm>,
  version: string | null;
}

export interface ViewFormatTerm {
  id: string;
  name: string;
  url: string;
}

export interface ViewParameter {
  name: string;
  type: string;
  value: boolean | number | string | null;
  range: (boolean | number | string)[] | null;
  kisaoId: string;
  kisaoUrl: string;
  availableSoftwareInterfaceTypes: string[];
}

export interface ViewParameterObservable {
  name: Observable<string>;
  type: string;
  value: boolean | number | string | Observable<string> | null;
  range: (boolean | number | string | Observable<string>)[] | null;
  kisaoId: string;
  kisaoUrl: string;
  availableSoftwareInterfaceTypes: string[];
}

export interface ViewIdentifier {
  text: string;
  url: string;
}

export interface ViewCitation {
  url: string | null;
  text: string;
}

export interface ViewVersion {
  label: string;
  created: string;
  image?: string;
  curationStatus: string;
}

export interface ViewAuthor {
  name: string;
  orcidUrl: string | null;
}

export interface ViewSimulator {
  _json: string;
  id: string;
  version: string;
  name: string;
  description: string | null;
  image?: string;
  urls: Url[];
  licenseUrl: Observable<string> | null;
  licenseName: Observable<string> | null;
  authors: ViewAuthor[];
  identifiers: ViewIdentifier[];
  citations: ViewCitation[];
  algorithms: Observable<ViewAlgorithm[]>;
  interfaceTypes: string[];
  supportedProgrammingLanguages: string[];
  versions: Observable<ViewVersion[]>;
  curationStatus: string;
  created: string;
  updated: string;
}
