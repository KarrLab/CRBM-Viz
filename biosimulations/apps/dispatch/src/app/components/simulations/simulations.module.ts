import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SharedUiModule } from '@biosimulations/shared/ui';
import { BiosimulationsIconsModule } from '@biosimulations/shared/icons';
import { PlotlyViaWindowModule } from 'angular-plotly.js';

import { SimulationsRoutingModule } from './simulations-routing.module';
import { BrowseComponent } from './browse/browse.component';
import { ViewComponent } from './view/view.component';
import { VisualisationComponent } from './view/visualisation/visualisation.component';

@NgModule({
  declarations: [
    BrowseComponent,
    ViewComponent,
    VisualisationComponent,
  ],
  imports: [
    CommonModule,
    SimulationsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    SharedUiModule,
    BiosimulationsIconsModule,
    PlotlyViaWindowModule,
  ]
})
export class SimulationsModule { }
