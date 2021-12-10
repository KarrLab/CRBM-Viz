import { Module } from '@nestjs/common';
import { MetadataService } from './metadata.service';
import { MetadataController } from './metadata.controller';
import {
  SimulationRunMetadataModel,
  SimulationRunMetadataSchema,
} from './metadata.model';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SimulationRunModel,
  SimulationRunModelSchema,
} from '../simulation-run/simulation-run.model';
import { BiosimulationsAuthModule } from '@biosimulations/auth/nest';

@Module({
  providers: [MetadataService],
  controllers: [MetadataController],
  imports: [
    BiosimulationsAuthModule,
    MongooseModule.forFeature([
      {
        name: SimulationRunMetadataModel.name,
        schema: SimulationRunMetadataSchema,
      },
      { name: SimulationRunModel.name, schema: SimulationRunModelSchema },
    ]),
  ],
  exports: [MetadataService],
})
export class MetadataModule {}
