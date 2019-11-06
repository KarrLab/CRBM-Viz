import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './Modules/about/help/help.component';

import { HomeComponent } from './Shared/Components/home/home.component';

import { SimulateComponent } from './Modules/simulate/simulate/simulate.component';
import { FourComponent } from './Shared/Components/four/four.component';
import { UnderConstructionComponent } from './Shared/Components/under-construction/under-construction.component';
import { AuthGuard } from './Shared/Gaurds/auth.guard';
import { UploadComponent } from './Modules/models/upload/upload.component';
import { FileEditComponent } from './Modules/models/file-edit/file-edit.component';
import { CallbackComponent } from './Shared/Components/callback/callback.component';
import { ProfileComponent } from './Modules/account/profile/profile.component';
import { ProfileEditComponent } from './Modules/account/profile/profile-edit.component';
import { DataComponent } from './Modules/simulate/data/data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'visualize',
    loadChildren: () =>
      import('./Modules/visualize/visualize.module').then(
        m => m.VisualizeModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./Modules/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./Modules/account/account.module').then(m => m.AccountModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'simulate',
    loadChildren: () =>
      import('./Modules/simulate/simulate.module').then(m => m.SimulateModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'models',
    loadChildren: () =>
      import('./Modules/models/models.module').then(m => m.ModelsModule),
  },

  // { path: 'login', component: LoginComponent },
  { path: 'files', component: UploadComponent, canActivate: [AuthGuard] },
  {
    path: 'files/edit/:fileId',
    component: FileEditComponent,
    canActivate: [AuthGuard],
  },
  { path: 'callback', component: CallbackComponent },

  { path: '**', component: FourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
