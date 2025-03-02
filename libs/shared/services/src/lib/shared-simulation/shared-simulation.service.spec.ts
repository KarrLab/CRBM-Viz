import { TestBed } from '@angular/core/testing';

import { IonicStorageModule, Storage } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { Drivers } from '@ionic/storage';

import { SimulationRunService } from '@biosimulations/angular-api-client';
import { SharedSimulationService } from './shared-simulation.service';
import { ConfigService } from '@biosimulations/config/angular';

describe('SharedSimulationStatusService', () => {
  let simService: SharedSimulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigService, SimulationRunService, Storage],
      imports: [
        HttpClientModule,
        IonicStorageModule.forRoot({
          driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
        }),
      ],
    });
    simService = TestBed.inject(SharedSimulationService);
  });

  it('should be created', () => {
    expect(simService).toBeTruthy();
  });
});
