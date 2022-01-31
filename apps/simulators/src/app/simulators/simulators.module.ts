import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntologyClientModule } from '@biosimulations/ontology/client';
import { SharedUiModule } from '@biosimulations/shared/ui';
import { BiosimulationsIconsModule } from '@biosimulations/shared/icons';
import { SharedDebugModule } from '@biosimulations/shared/debug';
import { SimulatorsRoutingModule } from './simulators-routing.module';
import { BrowseSimulatorsComponent } from './browse-simulators/browse-simulators.component';
import { ViewSimulatorComponent } from './view-simulator/view-simulator.component';
import { HighlightModule } from 'ngx-highlightjs';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { SharedAngularModule} from '@biosimulations/shared/angular';

@NgModule({
  declarations: [BrowseSimulatorsComponent, ViewSimulatorComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    SharedAngularModule,
    BiosimulationsIconsModule,
    SimulatorsRoutingModule,
    SharedDebugModule,
    HighlightModule,
    OntologyClientModule,
    NgxJsonLdModule,
  ],
  providers: [],
})
export class SimulatorsModule {}
