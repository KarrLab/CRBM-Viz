import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { SharedUiModule } from '@biosimulations/shared/ui';
import { BiosimulationsIconsModule } from '@biosimulations/shared/icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { ConfigService } from '@biosimulations/shared/services';
import { Error404Component } from '@biosimulations/shared/ui';

import config from '../assets/config.json';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'run',
    loadChildren: () =>
      import('./components/run/run.module').then((m) => m.RunModule),
    data: {
      breadcrumb: 'Run'
    }
  },
  {
    path: 'simulations',
    loadChildren: () =>
      import('./components/simulations/simulations.module').then((m) => m.SimulationsModule),
    data: {
      breadcrumb: 'Your simulations'
    }
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./components/help/help.module').then((m) => m.HelpModule),
    data: {
      breadcrumb: 'Help'
    }
  },
  {
    path: '**',
    component: Error404Component,
    data: {
      config: config,
    },
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    SharedUiModule,
    BiosimulationsIconsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    RouterModule.forRoot(routes, { initialNavigation: 'enabled', scrollPositionRestoration: 'enabled' }),
    IonicStorageModule.forRoot({
      driverOrder: ['indexeddb', 'websql', 'localstorage']
    }),
  ],
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: {disabled: true}},
    {provide: ConfigService, useValue: config },
  ],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
