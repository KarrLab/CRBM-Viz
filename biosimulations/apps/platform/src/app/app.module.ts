import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@biosimulations/shared/environments';
import { SharedUiModule } from '@biosimulations/shared/ui';
import { MarkdownModule } from 'ngx-markdown';
import { IonicStorageModule } from '@ionic/storage';

import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { SharedModule } from './shared/shared.module';
import { AuthEnvironment, AuthService } from '@biosimulations/auth/angular';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ConfigService } from '@biosimulations/shared/services';
import config from '../assets/config.json';

// TODO: make parameterizable based on environment (deployment, test, dev)
const env = {
  authDomain: 'auth.biosimulations.org',
  apiDomain: 'https://api.biosimulations.dev',
  clientId: '0NKMjbZuexkCgfWY3BG9C3808YsdLUrb',
  redirectUri: `${window.location.origin}`,
  logoutUri: `${window.location.origin}`,
  audience: 'api.biosimulations.org',
  scope: '',
};

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'models',
    loadChildren: () =>
      import('./models/models.module').then((m) => m.ModelsModule),
    data: {
      breadcrumb: 'Models',
    },
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then((m) => m.HelpModule),
    data: {
      breadcrumb: 'Help',
    },
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    SharedUiModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    IonicStorageModule.forRoot({
      driverOrder: ['indexeddb', 'websql', 'localstorage'],
    }),
    SharedModule,
  ],
  providers: [
    AuthService,
    { provide: AuthEnvironment, useValue: env },
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: { disabled: true } },
    { provide: ConfigService, useValue: config },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
