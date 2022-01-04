import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@biosimulations/shared/ui';
import { SimulationRunsVizModule } from '@biosimulations/simulation-runs/viz';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BiosimulationsIconsModule } from '@biosimulations/shared/icons';
import { MetadataComponent } from './metadata/metadata.component';
import { FilesComponent } from './files/files.component';
import { SelectVisualizationComponent } from './select-viz/select-viz.component';
import { DesignHistogram1DVisualizationComponent } from './design-histogram-1d-viz/design-histogram-1d-viz.component';
import { DesignHeatmap2DVisualizationComponent } from './design-heatmap-2d-viz/design-heatmap-2d-viz.component';
import { DesignLine2DVisualizationComponent } from './design-line-2d-viz/design-line-2d-viz.component';
import { RenderVisualizationComponent } from './render-viz/render-viz.component';
import { ApiClientModule } from '@biosimulations/angular-api-client';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedUiModule,
    SimulationRunsVizModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    BiosimulationsIconsModule,
    ApiClientModule,
    MarkdownModule.forRoot({ 
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: false,
        },
      },
    })
  ],
  exports: [
    MetadataComponent,
    FilesComponent,
    SelectVisualizationComponent,
    DesignHistogram1DVisualizationComponent,
    DesignHeatmap2DVisualizationComponent,
    DesignLine2DVisualizationComponent,
    RenderVisualizationComponent,
  ],
  declarations: [
    MetadataComponent,
    FilesComponent,
    SelectVisualizationComponent,
    DesignHistogram1DVisualizationComponent,
    DesignHeatmap2DVisualizationComponent,
    DesignLine2DVisualizationComponent,
    RenderVisualizationComponent,
  ],
})
export class SimulationRunsUiModule {}
