import { LabeledIdentifier } from '@biosimulations/datamodel/api';
import {
  SedDataSet,
  PlotlyDataLayout,
  SimulationRunOutputDatum,
  SedReport,
} from '@biosimulations/datamodel/common';
import { BiosimulationsIcon } from '@biosimulations/shared/icons';
import { Observable, BehaviorSubject } from 'rxjs';
import { Spec as VegaSpec } from 'vega';

export interface Creator {
  label: string | null;
  uri: string | null;
  icon: BiosimulationsIcon;
}

export interface ValueIsUrl {
  value: string;
  isUrl: boolean;
}

export type LabeledIdentifierIsUrl = Omit<LabeledIdentifier, 'uri'> & {
  uri: ValueIsUrl | null;
};

export interface ProjectMetadata {
  thumbnails: string[];
  title: string;
  abstract?: string;
  creators: Creator[];
  description?: string;
  topAttributes: List[];
  bottomAttributes: List[];
}

export interface ListItem {
  title: string;
  value: string;
  icon: BiosimulationsIcon;
  url: string | null;
}

export interface List {
  title: string;
  items: ListItem[];
}

export type SimulationRunMetadata = List[];

export interface SedDocumentReports {
  id: string;
  outputs: SedReport[];
}

export type UriSedDataSetMap = { [uri: string]: SedDataSet };
export type UriSetDataSetResultsMap = {
  [uri: string]: SimulationRunOutputDatum;
};

export interface VegaVisualization {
  _type: 'VegaVisualization';
  id: string;
  name: string;
  userDesigned: false;
  renderer: 'Vega';
  vegaSpec: Observable<VegaSpec | false>;
}

export interface SedPlot2DVisualization {
  _type: 'SedPlot2DVisualization';
  id: string;
  name: string;
  userDesigned: false;
  renderer: 'Plotly';
  plotlyDataLayout: Observable<Observable<PlotlyDataLayout>>;
}

export interface Histogram1DVisualization {
  _type: 'Histogram1DVisualization';
  id: string;
  name: string;
  userDesigned: true;
  simulationRunId: string;
  sedDocs: SedDocumentReports[];
  renderer: 'Plotly';
  uriSedDataSetMap: UriSedDataSetMap;
  plotlyDataLayoutSubject: BehaviorSubject<Observable<PlotlyDataLayout | null>>;
  plotlyDataLayout: Observable<Observable<PlotlyDataLayout | null>>;
}

export interface Heatmap2DVisualization {
  _type: 'Heatmap2DVisualization';
  id: string;
  name: string;
  userDesigned: true;
  simulationRunId: string;
  sedDocs: SedDocumentReports[];
  renderer: 'Plotly';
  uriSedDataSetMap: UriSedDataSetMap;
  plotlyDataLayoutSubject: BehaviorSubject<Observable<PlotlyDataLayout | null>>;
  plotlyDataLayout: Observable<Observable<PlotlyDataLayout | null>>;
}

export interface Line2DVisualization {
  _type: 'Line2DVisualization';
  id: string;
  name: string;
  userDesigned: true;
  simulationRunId: string;
  sedDocs: SedDocumentReports[];
  renderer: 'Plotly';
  uriSedDataSetMap: UriSedDataSetMap;
  plotlyDataLayoutSubject: BehaviorSubject<Observable<PlotlyDataLayout | null>>;
  plotlyDataLayout: Observable<Observable<PlotlyDataLayout | null>>;
}

export type DesignVisualization =
  | Histogram1DVisualization
  | Heatmap2DVisualization
  | Line2DVisualization;

export type Visualization =
  | VegaVisualization
  | SedPlot2DVisualization
  | DesignVisualization;

export interface VisualizationList {
  title: string;
  visualizations: Visualization[];
}

export interface Directory {
  _type: 'Directory';
  location: string;
  level: number;
  title: string;
}

export interface File {
  _type: 'File';
  location: string;
  level: number;
  title: string;
  basename: string;
  format: string;
  formatUrl: string | null;
  icon: BiosimulationsIcon;
  master: boolean;
  url: string;
  size: string | null;
}

export type Path = Directory | File;
