import { Component, OnInit, Inject } from '@angular/core';
import { BreadCrumbsService } from 'src/app/Shared/Services/bread-crumbs.service';
import { StatsService } from 'src/app/Shared/Services/stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  private stats: object;
  public statGraphs: object[] = [];
  public readonly vegaOptions: object = {
    renderer: 'canvas',
  };

  constructor(
    @Inject(BreadCrumbsService) private breadCrumbsService: BreadCrumbsService,
    @Inject(StatsService) private statsService: StatsService) { }

  ngOnInit() {
    this.breadCrumbsService.set([], [], ['fluid-topbar'])

    this.stats = this.statsService.get();

    this.statGraphs = [
      [
        this.getBarGraph(
          ['fas', 'database'],
          'Content',
          'BioSimulations contains hundreds of modeling projects',
          'Count', null, 'log',
          this.stats['countObjectsByType']),
        this.getBarGraph(
          ['far', 'file-code'],
          'Modeling frameworks',
          'BioSimulations supports several modeling frameworks',
          'Models', null, 'linear',
          this.stats['countModelsByFramework']),
        this.getBarGraph(
          ['far', 'file-alt'],
          'Model formats',
          'BioSimulations supports several model formats',
          'Models', null, 'linear',
          this.stats['countModelsByFormat']),
      ],
      [
        null,
        this.getBarGraph(
          ['fas', 'cogs'],
          'Simulators',
          'BioSimulations incorporates several simulators',
          'Simulations', null, 'linear',
          this.stats['countSimulationsBySimulator']),
        null,
      ],
    ];
  }

  getBarGraph(icon: string[], title: string, subtitle: string, xAxisLabel: string, yAxisLabel: string, xScaleType: string, data: object[]): object {
    const xScale: object = null;
    let maxVal = 0;
    for (const datum of data) {
      maxVal = Math.max(maxVal, datum['count']);
    }
    const xTicks: number[] = [];
    for (let iPower = 1; iPower <= Math.log10(maxVal); iPower++) {
      xTicks.push(Math.pow(10, iPower));
    }

    return {
      icon,
      title,
      subtitle,
      spec: {
        $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
        width: 'container',
        height: 'container',
        padding: {
          left: 3,
          right: 3,
          top: 0,
          bottom: 0,
        },
        autosize: {
          type: 'fit',
          resize: true,
        },
        background: 'transparent',
        config: {
          view: {
            stroke: 'transparent',
          },
        },
        datasets: {
          values: [],
        },
        data: {
          name: 'values'
        },
        encoding: {
          y: {
            field: 'category',
            type: 'ordinal',
            axis: {
              title: yAxisLabel,
              titleFontWeight: 'normal',
              gridOpacity: 0,
              minExtent: 84,
              maxExtent: 84,
            },
          },
          x: {
            field: 'count',
            type: 'quantitative',
            scale: {
              type: xScaleType,
            },
            axis: {
              title: xAxisLabel,
              titleFontWeight: 'normal',
              gridOpacity: 0,
              values: (xScaleType === 'log' ? xTicks : undefined)
            },
          },
        },
        mark: {type: 'bar', color: '#999'},
      },
      data: {
        values: data
      }
    }
  }
}
