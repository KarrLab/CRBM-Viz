import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from './error-404.component';
import { Error500Component } from './error-500.component';
import { Error500DialogComponent } from './error-500-dialog.component';
import { UnderConstructionComponent } from './under-construction.component';
import { UnderMaintainenceComponent } from './under-maintainence.component';
import { ErrorComponent } from './error.component';
import { BiosimulationsIconsModule } from '@biosimulations/shared/icons';
import { SharedUiModule } from '@biosimulations/shared/ui';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';

export const errorRoutes: Routes = [
  {
    path: '404',
    component: Error404Component,
  },
  {
    path: '500',
    component: Error500Component,
  },
  {
    path: 'construction',
    component: UnderConstructionComponent,
  },
  {
    path: 'maintainence',
    component: UnderMaintainenceComponent,
  },
  {
    path: '',
    component: Error404Component,
  },
];

@NgModule({
  declarations: [
    ErrorComponent,
    Error404Component,
    Error500Component,
    Error500DialogComponent,
    UnderConstructionComponent,
    UnderMaintainenceComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(errorRoutes),
    BiosimulationsIconsModule,
    SharedUiModule,
    MatDialogModule,
  ],
  exports: [
    RouterModule,
    ErrorComponent,
    Error404Component,
    Error500Component,
    Error500DialogComponent,
    UnderConstructionComponent,
    UnderMaintainenceComponent,
  ],
  providers: [],
})
export class SharedErrorComponentsModule {}
