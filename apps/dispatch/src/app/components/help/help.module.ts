import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { HelpComponent } from './help/help.component';

import { SharedUiModule } from '@biosimulations/shared/ui';
import { BiosimulationsIconsModule } from '@biosimulations/shared/icons';
import { SharedContentModule } from '@biosimulations/shared/content';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

@NgModule({
  declarations: [
    AboutComponent,
    FaqComponent,
    HelpComponent,
  ],
  imports: [
    CommonModule,
    HelpRoutingModule,
    SharedUiModule,
    BiosimulationsIconsModule,
    SharedContentModule,
    NgxJsonLdModule,
  ],
})
export class HelpModule {}
