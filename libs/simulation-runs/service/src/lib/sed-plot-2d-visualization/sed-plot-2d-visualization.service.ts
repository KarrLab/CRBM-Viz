import { Injectable } from '@angular/core';
import {
  SedPlot2D,
  PlotlyDataLayout,
  PlotlyTrace,
  PlotlyTraceMode,
  PlotlyTraceType,
  SimulationRunOutput,
  SimulationRunOutputDatum,
} from '@biosimulations/datamodel/common';
/*
import {
  SimulationRunOutput,
  SimulationRunResults,
  SimulationRunOutputDatum,
} from '@biosimulations/datamodel/api';
*/

interface SedDatasetResults {
  uri: string;
  id: string;
  location: string;
  outputId: string;
  label: string;
  values: (number | boolean | string)[];
}

interface SedDatasetResultsMap {
  [uri: string]: SedDatasetResults;
}

@Injectable({
  providedIn: 'root',
})
export class SedPlot2DVisualizationService {
  public getPlotlyDataLayout(
    simulationRunId: string,
    sedDocLocation: string,
    plot: SedPlot2D,
    results: SimulationRunOutput,
  ): PlotlyDataLayout {
    if (sedDocLocation.startsWith('./')) {
      sedDocLocation = sedDocLocation.substring(2);
    }

    const resultsMap: SedDatasetResultsMap =
      this.getSimulationRunResults(results);

    const traces: PlotlyTrace[] = [];
    const xAxisTitlesSet = new Set<string>();
    const yAxisTitlesSet = new Set<string>();
    const errors: string[] = [];
    for (const curve of plot.curves) {
      const xId =
        sedDocLocation + '/' + plot.id + '/' + curve.xDataGenerator.id;
      const yId =
        sedDocLocation + '/' + plot.id + '/' + curve.yDataGenerator.id;
      xAxisTitlesSet.add(curve.xDataGenerator.name || curve.xDataGenerator.id);
      yAxisTitlesSet.add(curve.yDataGenerator.name || curve.yDataGenerator.id);
      const trace = {
        name: curve.name || curve.id,
        x: resultsMap?.[xId]?.values,
        y: resultsMap?.[yId]?.values,
        xaxis: 'x1',
        yaxis: 'y1',
        type: PlotlyTraceType.scatter,
        mode: PlotlyTraceMode.lines,
      };
      if (trace.x && trace.y) {
        traces.push(trace as PlotlyTrace);
      } else {
        errors.push(`Curve '${curve.id}' of '${xId}' and '${yId}'.`);
      }
    }

    const xAxisTitlesArr = Array.from(xAxisTitlesSet);
    const yAxisTitlesArr = Array.from(yAxisTitlesSet);
    let xAxisTitle: string | undefined;
    let yAxisTitle: string | undefined;
    let showLegend = false;

    if (xAxisTitlesArr.length == 1) {
      xAxisTitle = xAxisTitlesArr[0];
    } else if (xAxisTitlesArr.length > 1) {
      xAxisTitle = 'Multiple';
      showLegend = true;
    }

    if (yAxisTitlesArr.length == 1) {
      yAxisTitle = yAxisTitlesArr[0];
    } else if (yAxisTitlesArr.length > 1) {
      yAxisTitle = 'Multiple';
      showLegend = true;
    }

    const dataLayout: PlotlyDataLayout = {
      data: traces.length ? traces : undefined,
      layout: {
        xaxis1: {
          anchor: 'x1',
          title: xAxisTitle,
          type: plot.xScale,
        },
        yaxis1: {
          anchor: 'y1',
          title: yAxisTitle,
          type: plot.yScale,
        },
        grid: {
          rows: 1,
          columns: 1,
          pattern: 'independent',
        },
        showlegend: showLegend,
        width: undefined,
        height: undefined,
      },
      dataErrors: errors.length > 0 ? errors : undefined,
    };

    return dataLayout;
  }

  private getSimulationRunResults(
    result: SimulationRunOutput,
  ): SedDatasetResultsMap {
    const datasetResultsMap: SedDatasetResultsMap = {};

    const sedmlLocationOutputId = result.outputId;

    const sedmlLocation = this.getLocationFromSedmLocationId(
      sedmlLocationOutputId,
    );

    const outputId = this.getOutputIdFromSedmlLocationId(sedmlLocationOutputId);

    result.data.forEach((datum: SimulationRunOutputDatum): void => {
      const uri = sedmlLocation + '/' + outputId + '/' + datum.id;
      datasetResultsMap[uri] = {
        uri: uri,
        id: datum.id,
        location: sedmlLocation,
        outputId: outputId,
        label: datum.label,
        values: datum.values,
      };
    });

    return datasetResultsMap;
  }

  private getLocationFromSedmLocationId(outputLocationId: string): string {
    // Remove the last "/" and the text after the last "/"
    // EG simulation_1.sedml/subfolder1/Figure_3b" => simulation_1.sedml/subfolder1
    // TODO write tests
    let docLocation = outputLocationId
      .split('/')
      .reverse()
      .slice(1)
      .reverse()
      .join('/');
    if (docLocation.startsWith('./')) {
      docLocation = docLocation.substring(2);
    }
    return docLocation;
  }

  private getOutputIdFromSedmlLocationId(location: string): string {
    return location.split('/').reverse()[0];
  }
}
