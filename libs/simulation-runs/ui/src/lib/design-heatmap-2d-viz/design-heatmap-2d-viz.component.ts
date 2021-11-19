import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  SedReport,
  SedDataSet,
  PlotlyDataLayout,
  PlotlyTraceType,
} from '@biosimulations/datamodel/common';
import {
  UriSedDataSetMap,
  UriSetDataSetResultsMap,
  Heatmap2DVisualization,
  SedDocumentReports,
} from '@biosimulations/datamodel-simulation-runs';
import { ViewService } from '@biosimulations/simulation-runs/service';
import { Observable, map, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Spec as VegaSpec } from 'vega';
import vegaTemplate from './vega-template.json';
import { Endpoints } from '@biosimulations/config/common';

@Component({
  selector: 'biosimulations-project-design-heatmap-2d-visualization',
  templateUrl: './design-heatmap-2d-viz.component.html',
  styleUrls: ['./design-heatmap-2d-viz.component.scss'],
})
export class DesignHeatmap2DVisualizationComponent implements OnInit {
  @Input()
  visualization!: Heatmap2DVisualization;

  @Input()
  simulationRunId!: string;

  @Input()
  sedDocs!: SedDocumentReports[];

  @Input()
  uriSedDataSetMap!: UriSedDataSetMap;

  @Input()
  formGroup!: FormGroup;

  yDataSetsFormControl!: FormControl;

  private endpoints = new Endpoints();

  constructor(
    private formBuilder: FormBuilder,
    private viewService: ViewService,
  ) {}

  ngOnInit(): void {
    this.formGroup.setControl(
      'yDataSets',
      this.formBuilder.control([], [Validators.minLength(1)]),
    );
    this.formGroup.setControl('xDataSet', this.formBuilder.control(null));

    this.yDataSetsFormControl = this.formGroup.controls
      .yDataSets as FormControl;
  }

  public setSelectedDataSets(
    type: 'SedDocument' | 'SedReport' | 'SedDataSet',
    sedDocument: SedDocumentReports,
    sedDocumentId: string,
    report?: SedReport,
    reportId?: string,
    dataSet?: SedDataSet,
    dataSetId?: string,
  ): void {
    const formControl = this.yDataSetsFormControl;

    const selectedUris = new Set(formControl.value);

    const uri =
      sedDocumentId +
      (reportId ? '/' + reportId : '') +
      (dataSetId ? '/' + dataSetId : '');
    const selected = selectedUris.has(uri);

    if (type === 'SedDocument') {
      sedDocument.outputs.forEach((report: SedReport): void => {
        const reportUri = uri + '/' + report.id;
        if (selected) {
          selectedUris.add(reportUri);
        } else {
          selectedUris.delete(reportUri);
        }

        report.dataSets.forEach((dataSet: SedDataSet): void => {
          const dataSetUri = reportUri + '/' + dataSet.id;
          if (selected) {
            selectedUris.add(dataSetUri);
          } else {
            selectedUris.delete(dataSetUri);
          }
        });
      });
    } else if (type === 'SedReport') {
      if (!selected) {
        selectedUris.delete(sedDocumentId);
      }

      report?.dataSets?.forEach((dataSet: SedDataSet): void => {
        const dataSetUri = uri + '/' + dataSet.id;
        if (selected) {
          selectedUris.add(dataSetUri);
        } else {
          selectedUris.delete(dataSetUri);
        }
      });

      let hasAllReports = true;
      for (const report of sedDocument.outputs) {
        const reportUri = sedDocumentId + '/' + report.id;
        if (!selectedUris.has(reportUri)) {
          hasAllReports = false;
          break;
        }
      }
      if (hasAllReports) {
        selectedUris.add(sedDocumentId);
      }
    } else {
      if (selected) {
        let hasAllDataSets = true;
        for (const dataSet of report?.dataSets || []) {
          const dataSetUri =
            sedDocumentId + '/' + report?.id + '/' + dataSet.id;
          if (!selectedUris.has(dataSetUri)) {
            hasAllDataSets = false;
            break;
          }
        }
        if (hasAllDataSets) {
          selectedUris.add(sedDocumentId + '/' + (reportId as string));
        }

        let hasAllReports = true;
        for (const report of sedDocument.outputs) {
          const reportUri = sedDocumentId + '/' + report?.id;
          if (!selectedUris.has(reportUri)) {
            hasAllReports = false;
            break;
          }
        }
        if (hasAllReports) {
          selectedUris.add(sedDocumentId);
        }
      } else {
        selectedUris.delete(sedDocumentId + '/' + (reportId as string));
        selectedUris.delete(sedDocumentId);
      }
    }

    formControl.setValue(Array.from(selectedUris));
  }

  public getPlotlyDataLayout(): Observable<PlotlyDataLayout> {
    const formGroup = this.formGroup;
    const yFormControl = formGroup.controls.yDataSets as FormControl;
    const xFormControl = formGroup.controls.xDataSet as FormControl;
    const selectedYUris = this.getSelectedYDataSetUris();
    const selectedXUri = xFormControl.value;

    const dataSetUris = [...selectedYUris];
    if (selectedXUri) {
      dataSetUris.push(selectedXUri);
    }

    return this.viewService
      .getReportResults(this.simulationRunId, dataSetUris)
      .pipe(
        map((uriResultsMap: UriSetDataSetResultsMap): PlotlyDataLayout => {
          const errors: string[] = [];

          const zData: any[][] = [];
          const yTicks: string[] = [];
          for (let selectedUri of selectedYUris) {
            if (selectedUri.startsWith('./')) {
              selectedUri = selectedUri.substring(2);
            }

            const selectedDataSet = this.uriSedDataSetMap?.[selectedUri];
            if (selectedDataSet) {
              const data = uriResultsMap?.[selectedUri];
              if (data) {
                const flattenedData = this.viewService.flattenArray(
                  data.values,
                );
                zData.push(flattenedData);
                yTicks.push(data.label);
              } else {
                errors.push(`Y-data set '${selectedUri}'.`);
              }
            }
          }

          let xTicks: any[] | undefined;
          let xAxisTitle: string | undefined;
          if (selectedXUri) {
            const data = uriResultsMap?.[selectedXUri];
            if (data) {
              xTicks = this.viewService.flattenArray(data.values);
              xAxisTitle = data.label;
            } else {
              errors.push(`X-data set '${selectedXUri}'.`);
            }
          }

          zData.reverse();
          yTicks.reverse();

          const trace = {
            z: zData,
            y: yTicks,
            x: xTicks,
            xaxis: 'x1',
            yaxis: 'y1',
            type: PlotlyTraceType.heatmap,
            hoverongaps: false,
          };

          const dataLayout = {
            data: trace.y.length ? [trace] : undefined,
            layout: {
              xaxis1: {
                anchor: 'x1',
                title: xAxisTitle,
                type: 'linear',
              },
              //yaxis1: {
              //  anchor: 'y1',
              //  title: undefined,
              //  type: 'linear',
              //},
              grid: {
                rows: 1,
                columns: 1,
                pattern: 'independent',
              },
              showlegend: false,
              width: undefined,
              height: undefined,
            },
            dataErrors: errors.length > 0 ? errors : undefined,
          } as PlotlyDataLayout;

          return dataLayout;
        }),
        catchError((): Observable<PlotlyDataLayout> => {
          return of({
            dataErrors: [
              'The results of one or more SED reports requested for the plot could not be loaded.',
            ],
          });
        }),
      );
  }

  public exportToVega(): Observable<VegaSpec> {
    const formGroup = this.formGroup;
    const yFormControl = formGroup.controls.yDataSets as FormControl;
    const xFormControl = formGroup.controls.xDataSet as FormControl;
    const selectedYUris = this.getSelectedYDataSetUris();
    let selectedXUri = xFormControl.value;

    const dataSetUris = [...selectedYUris];
    if (selectedXUri) {
      dataSetUris.push(selectedXUri);
    }

    return this.viewService
      .getReportResults(this.simulationRunId, dataSetUris)
      .pipe(
        map((uriResultsMap: UriSetDataSetResultsMap): VegaSpec => {
          if (Object.keys(uriResultsMap).length === 0) {
            throw new Error(
              'The data for the visualization could not be retrieved',
            );
          }

          let vegaDataSets: {
            templateNames: string[];
            sourceName: (iDataSet: number) => string;
            filteredName: (iDataSet: number) => string;
            joinedName?: string;
            joinedTransforms?: any[];
            data: { [outputUri: string]: string[] };
          }[] = [];
          const vega = JSON.parse(JSON.stringify(vegaTemplate)) as any;

          // y axis
          let isDataScalar = true;
          const selectedYDataSets: { [outputUri: string]: string[] } = {};
          for (let selectedUri of selectedYUris) {
            if (selectedUri.startsWith('./')) {
              selectedUri = selectedUri.substring(2);
            }

            const selectedDataSet = this.uriSedDataSetMap?.[selectedUri];
            if (selectedDataSet) {
              const data = uriResultsMap?.[selectedUri];
              if (data) {
                const uriParts = selectedUri.split('/');
                uriParts.pop();
                const outputUri = uriParts.join('/');

                if (!(outputUri in selectedYDataSets)) {
                  selectedYDataSets[outputUri] = [];
                }
                selectedYDataSets[outputUri].push(data.id);

                if (data.values.length > 1) {
                  isDataScalar = false;
                }
              }
            }
          }

          // x axis
          let xAxisTitle: string;
          let selectedXOutputUri: string;
          let selectedXDataSetId: string;
          if (selectedXUri) {
            if (selectedXUri.startsWith('./')) {
              selectedXUri = selectedXUri.substring(2);
            }
            const data = uriResultsMap?.[selectedXUri];

            const uriParts = selectedXUri.split('/');
            uriParts.pop();
            selectedXOutputUri = uriParts.join('/');

            selectedXDataSetId = data.id;
            xAxisTitle = data.label;
          } else {
            selectedXOutputUri = Object.keys(selectedYDataSets)[0];
            selectedXDataSetId = selectedYDataSets[selectedXOutputUri][0];
            xAxisTitle = 'Index';
          }
          const selectedXDataSet: { [outputUri: string]: string[] } = {};
          selectedXDataSet[selectedXOutputUri] = [selectedXDataSetId];

          vegaDataSets = [
            {
              templateNames: [
                'rawHeatmapData0',
                'rawHeatmapData0_filtered',
                'rawHeatmapData_joined',
              ],
              sourceName: (iDataSet: number): string =>
                `rawHeatmapData${iDataSet}`,
              filteredName: (iDataSet: number): string =>
                `rawHeatmapData${iDataSet}_filtered`,
              joinedName: 'rawHeatmapData_joined',
              data: selectedYDataSets,
            },
            {
              templateNames: ['rawXData', 'rawXData_filtered'],
              sourceName: (iDataSet: number): string => `rawXData`,
              filteredName: (iDataSet: number): string => `rawXData_filtered`,
              data: selectedXDataSet,
            },
          ];

          // signals
          const vegaSignals: { [name: string]: any } = {
            ordinalXScale: !selectedXUri,
            xAxisTitle: xAxisTitle,
          };

          vega.signals.forEach((signalTemplate: any): void => {
            if (signalTemplate.name in vegaSignals) {
              signalTemplate.value = vegaSignals[signalTemplate.name];
            }
          });

          // data
          vegaDataSets.forEach((vegaDataSet: any): void => {
            // remove template data sets
            for (let iData = vega.data.length - 1; iData >= 0; iData--) {
              if (vegaDataSet.templateNames.includes(vega.data[iData].name)) {
                vega.data.splice(iData, 1);
              }
            }

            // add concrete data sets
            const concreteDataSets: any[] = [];
            const filteredVegaDataSetNames: string[] = [];
            Object.entries(vegaDataSet.data).forEach(
              (outputUriDataSetIds: [string, any], iDataSet: number): void => {
                const outputUri = outputUriDataSetIds[0];
                const outputUriParts = outputUri.split('/');
                const outputId = outputUriParts.pop();
                const sedDocumentLocation = outputUriParts.join('/');
                const dataSetIds = outputUriDataSetIds[1] as string[];

                concreteDataSets.push({
                  name: vegaDataSet.sourceName(iDataSet),
                  sedmlUri: [sedDocumentLocation, outputId],
                  url: this.endpoints.getRunResultsEndpoint(
                    this.simulationRunId,
                    `${sedDocumentLocation}/${outputId}`,
                    true,
                  ),
                  format: {
                    type: 'json',
                    property: 'data',
                  },
                });

                concreteDataSets.push({
                  name: vegaDataSet.filteredName(iDataSet),
                  source: concreteDataSets[concreteDataSets.length - 1].name,
                  transform: [
                    {
                      type: 'filter',
                      expr: `indexof(['${dataSetIds.join(
                        "', '",
                      )}'], datum.id) !== -1`,
                    },
                    {
                      type: 'formula',
                      expr: `'${outputUri}'`,
                      as: 'outputUri',
                    },
                  ],
                });

                filteredVegaDataSetNames.push(
                  concreteDataSets[concreteDataSets.length - 1].name,
                );
              },
            );

            if (vegaDataSet.joinedName) {
              concreteDataSets.push({
                name: vegaDataSet.joinedName,
                source: filteredVegaDataSetNames,
                transform: vegaDataSet.joinedTransforms || [],
              });
            }

            vega.data = concreteDataSets.concat(vega.data);
          });

          // scales
          if (isDataScalar) {
            for (const scale of vega.scales) {
              if (scale.name === 'xScale') {
                scale.type = 'quantize';
                break;
              }
            }

            for (const data of vega.data) {
              if (data.name === 'rawXData_diffed') {
                data.transform[0].filter = 'true';
                data.transform[2].expr += ' - 1';
                data.transform[3].expr += ' + 1';
                break;
              }
            }
          }

          // return Vega spec
          return vega;
        }),
      );
  }

  private getSelectedYDataSetUris(): string[] {
    return this.yDataSetsFormControl.value.filter((uri: string): boolean => {
      return uri in this.uriSedDataSetMap;
    });
  }
}
