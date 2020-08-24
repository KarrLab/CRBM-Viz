import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HelpRoutingModule } from './help-routing.module';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { HelpComponent } from './help/help.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

import { SharedUiModule } from '@biosimulations/shared/ui';
import { BiosimulationsIconsModule } from '@biosimulations/shared/icons';
import { SharedContentModule } from '@biosimulations/shared/content';

@NgModule({
  declarations: [AboutComponent, FaqComponent, HelpComponent, PrivacyPolicyComponent],
  imports: [
    CommonModule,    
    HelpRoutingModule,
    SharedUiModule,    
    BiosimulationsIconsModule,
    SharedContentModule,
  ]
})
export class HelpModule { }
