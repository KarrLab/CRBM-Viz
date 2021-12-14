import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiModule } from '@biosimulations/shared/ui';
import { BiosimulationsIconsModule } from '@biosimulations/shared/icons';
import { SharedContentModule } from '@biosimulations/shared/content';

import { HelpRoutingModule } from './help-routing.module';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { HelpComponent } from './help/help.component';
import { HighlightModule } from 'ngx-highlightjs';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

@NgModule({
  declarations: [
    AboutComponent,
    FaqComponent,
    HelpComponent,
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    BiosimulationsIconsModule,
    SharedContentModule,
    HelpRoutingModule,
    HighlightModule,
    NgxJsonLdModule,
  ],
})
export class HelpModule {}
