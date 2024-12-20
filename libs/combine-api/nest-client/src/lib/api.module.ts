import { DynamicModule, Module, Global } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Configuration } from './configuration';

import { HealthService } from './api/health.service';
import { MetadataService } from './api/metadata.service';
import { ModelsService } from './api/models.service';
import { SimulationAlgorithmsService } from './api/simulationAlgorithms.service';
import { SimulationExperimentsService } from './api/simulationExperiments.service';
import { SimulationProjectsService } from './api/simulationProjects.service';
import { ValidationService } from './api/validation.service';

@Global()
@Module({
  imports: [HttpModule],
  exports: [
    HealthService,
    MetadataService,
    ModelsService,
    SimulationAlgorithmsService,
    SimulationExperimentsService,
    SimulationProjectsService,
    ValidationService,
  ],
  providers: [
    HealthService,
    MetadataService,
    ModelsService,
    SimulationAlgorithmsService,
    SimulationExperimentsService,
    SimulationProjectsService,
    ValidationService,
  ],
})
export class ApiModule {
  public static forRoot(configurationFactory: () => Configuration): DynamicModule {
    return {
      module: ApiModule,
      providers: [{ provide: Configuration, useFactory: configurationFactory }],
    };
  }

  constructor(httpService: HttpService) {}
}
