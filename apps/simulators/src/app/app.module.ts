import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Route, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import { environment } from '@biosimulations/shared/environments';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { SharedUiModule } from '@biosimulations/shared/ui';
import { ScrollService } from '@biosimulations/shared/angular';
import { ConfigService } from '@biosimulations/config/angular';
import { HealthService } from './services/health/health.service';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { PwaModule } from '@biosimulations/shared/pwa';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SimulatorTableService } from './simulators/browse-simulators/simulator-table.service';

import { MARKED_PRELOADING_STRATEGY, RoutesModule } from '@biosimulations/shared/utils/routes';

import config from '../assets/config.json';
import { SharedErrorComponentsModule, SharedErrorHandlerModule } from '@biosimulations/shared/error-handler';
import { AngularAnalyticsModule } from '@biosimulations/angular-analytics';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'simulators',
    loadChildren: () => import('./simulators/simulators.module').then((m) => m.SimulatorsModule),
    data: {
      breadcrumb: 'Simulators',
      preload: {
        preload: true,
        delay: 500,
      },
    },
  },
  {
    path: 'utils',
    loadChildren: () => import('./utils/utils.module').then((m) => m.UtilsModule),
    data: {
      breadcrumb: 'Utilities',
    },
  },
  {
    path: 'error',
    loadChildren: () => SharedErrorComponentsModule,
  },
  {
    path: '**',
    loadChildren: () => SharedErrorComponentsModule,
  },
];
routes.forEach((route: Route): void => {
  if (route.data) {
    route.data.config = config;
  } else {
    route.data = { config };
  }
});

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedErrorHandlerModule,
    SharedUiModule,
    RoutesModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'disabled',
      preloadingStrategy: MARKED_PRELOADING_STRATEGY,
      relativeLinkResolution: 'legacy',
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    IonicStorageModule.forRoot({
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
    }),
    HighlightModule,
    PwaModule,
    AngularAnalyticsModule.forRoot(config.appName, config.analyticsId),
  ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: { disabled: true } },
    { provide: ConfigService, useValue: config },
    ScrollService,
    HealthService,
    {
      // Requires type declarations provided in the highlight.d.ts file in src
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          dockerfile: () => import('highlight.js/lib/languages/dockerfile'),
          json: () => import('highlight.js/lib/languages/json'),
          python: () => import('highlight.js/lib/languages/python'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    },
    SimulatorTableService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
