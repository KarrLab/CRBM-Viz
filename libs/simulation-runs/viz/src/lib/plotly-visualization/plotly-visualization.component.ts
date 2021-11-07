import {
  Component,
  Input,
  HostListener,
  ElementRef,
  AfterViewInit,
  OnDestroy,  
} from '@angular/core';
import {
  PlotlyTrace,
  PlotlyLayout,
  PlotlyDataLayout,
} from '@biosimulations/datamodel/common';
import { debounce } from 'throttle-debounce';

@Component({
  selector: 'biosimulations-plotly-visualization',
  templateUrl: './plotly-visualization.component.html',
  styleUrls: ['./plotly-visualization.component.scss'],
})
export class PlotlyVisualizationComponent implements AfterViewInit, OnDestroy {
  loading = false;
  data: PlotlyTrace[] | undefined = undefined;
  layout: PlotlyLayout | undefined = undefined;
  config: any = {
    scrollZoom: true,
    editable: false,
    toImageButtonOptions: {
      format: 'svg', // one of png, svg, jpeg, webp
      filename: 'chart',
      height: 500,
      width: 700,
      scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
    },
    modeBarButtonsToRemove: [],
    showEditInChartStudio: true,
    plotlyServerURL: 'https://chart-studio.plotly.com',
    // responsive: true,
  };
  error = false;

  @Input()
  set dataLayout(value: PlotlyDataLayout | null | undefined | false) {
    if (value) {
      this.loading = false;
      this.data = value.data;
      this.layout = value.layout;
      this.error = false;
      this.setLayout();
    } else if (value == null || value === undefined) {
      this.loading = true;
      this.error = false;
    } else {
      this.loading = false;
      this.error = true;
    }
  }

  visible = false;

  private resizeDebounce!: debounce<() => void>;
  private resizeObserver!: ResizeObserver;

  constructor(private hostElement: ElementRef) {}

  ngAfterViewInit() {
    this.resizeDebounce = debounce(50, false, this.setLayout.bind(this));

    (async () => {
      if (!('ResizeObserver' in window)) {
        // Loads polyfill asynchronously, only if required.
        const module = await import('@juggle/resize-observer');
        window.ResizeObserver = module.ResizeObserver;
      }
    })();

    this.resizeObserver = new ResizeObserver((entries, observer) => {
      this.resizeDebounce();
    });
    this.resizeObserver.observe(this.hostElement.nativeElement.parentElement);
  }

  ngOnDestroy() {
    this.resizeDebounce?.cancel();
    this.resizeObserver.disconnect();
  }

  private setLayout(): void {
    this.visible = this.hostElement.nativeElement.offsetParent != null;
    if (this.visible && this.layout) {
      const rect =
        this.hostElement.nativeElement.parentElement.getBoundingClientRect();
      this.layout.width = rect.width;
      this.layout.height = rect.height;
    }
  }
}
