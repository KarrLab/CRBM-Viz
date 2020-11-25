import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { SimulatorSpecsComponent } from './simulator-specs/simulator-specs.component';
import { SimulatorInterfacesComponent } from './simulator-interfaces/simulator-interfaces.component';
import { SimulatorImagesComponent } from './simulator-images/simulator-images.component';
import { SimulationReportsComponent } from './simulation-reports/simulation-reports.component';

const routes: Routes = [
    {
        path: '',
        component: OverviewComponent,
        data: {
            contextButtons: [
                {route: ['/standards', 'simulator-specs'], icon: 'browse', label: 'Simulator specs'},
                {route: ['/standards', 'simulator-interfaces'], icon: 'logs', label: 'Simulator interfaces'},
                {route: ['/standards', 'simulator-images'], icon: 'docker', label: 'Simulator images'},
                {route: ['/standards', 'simulation-reports'], icon: 'report', label: 'Simulation reports'},
            ]
        }
    },
    {
        path: 'simulator-specs',
        component: SimulatorSpecsComponent,
        data: {
            breadcrumb: 'Simulator specs',
            contextButtons: [
                {route: ['/standards', 'simulator-interfaces'], icon: 'logs', label: 'Simulator interfaces'},
                {route: ['/standards', 'simulator-images'], icon: 'docker', label: 'Simulator images'},
                {route: ['/standards', 'simulation-reports'], icon: 'report', label: 'Simulation reports'},
            ]
        }
    },
    {
        path: 'simulator-interfaces',
        component: SimulatorInterfacesComponent,
        data: {
            breadcrumb: 'Simulator interfaces',
            contextButtons: [
                {route: ['/standards', 'simulator-specs'], icon: 'browse', label: 'Simulator specs'},
                {route: ['/standards', 'simulator-images'], icon: 'docker', label: 'Simulator images'},
                {route: ['/standards', 'simulation-reports'], icon: 'report', label: 'Simulation reports'},
            ]
        }
    },
    {
        path: 'simulator-images',
        component: SimulatorImagesComponent,
        data: {
            breadcrumb: 'Simulator images',
            contextButtons: [
                {route: ['/standards', 'simulator-specs'], icon: 'browse', label: 'Simulator specs'},
                {route: ['/standards', 'simulator-interfaces'], icon: 'logs', label: 'Simulator interfaces'},
                {route: ['/standards', 'simulation-reports'], icon: 'report', label: 'Simulation reports'},
            ]
        }
    },
    {
        path: 'simulation-reports',
        component: SimulationReportsComponent,
        data: {
            breadcrumb: 'Simulation reports',
            contextButtons: [
                {route: ['/standards', 'simulator-specs'], icon: 'browse', label: 'Simulator specs'},
                {route: ['/standards', 'simulator-interfaces'], icon: 'logs', label: 'Simulator interfaces'},
                {route: ['/standards', 'simulator-images'], icon: 'docker', label: 'Simulator images'},
            ]
        }
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardsRoutingModule { }
