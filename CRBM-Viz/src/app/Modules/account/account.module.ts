import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile/profile-edit.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { MaterialModule } from '../app-material.module';

@NgModule({
  declarations: [ProfileComponent, ProfileEditComponent],

  imports: [CommonModule, AccountRoutingModule, SharedModule, MaterialModule],
})
export class AccountModule {}
