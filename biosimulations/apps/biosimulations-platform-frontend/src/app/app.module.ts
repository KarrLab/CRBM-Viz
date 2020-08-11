import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UiMaterialModule } from '@biosimulations/ui/material';
import { BiosimulationsIconsModule } from '@biosimulations/ui/icons';

import { BiosimulationsAppModule } from '@biosimulations/shared/biosimulations-ng-utils';
import { SharedModule } from './shared/shared.module';
import { AuthEnvironment, AuthService } from '@biosimulations/auth/frontend';
const env = {
  authDomain: 'auth.biosimulations.org',
  apiDomain: 'https://api.biosimulations.dev',
  clientId: '0NKMjbZuexkCgfWY3BG9C3808YsdLUrb',
  redirectUri: 'http://localhost:4200',
  logoutUri: 'http://localhost:4200',
  audience: 'api.biosimulations.org',
  scope: '',
};
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    data: {
      breadcrumb: 'Home'
    }
  },
  {
    path: 'models',
    loadChildren: () =>
      import('./models/models.module').then((m) => m.ModelsModule),
    data: {
      breadcrumb: 'Models'
    }
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./help/help.module').then((m) => m.HelpModule),
    data: {
      breadcrumb: 'Help'
    }
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BiosimulationsAppModule,
    UiMaterialModule,
    BiosimulationsIconsModule,
    RouterModule.forRoot(routes, { 
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    SharedModule,
  ],
  providers: [AuthService, { provide: AuthEnvironment, useValue: env }],

  bootstrap: [AppComponent],
})
export class AppModule { }
