/**
 * @file Module that declares the results controller for the api, the service that implements the controller methods, and the mongoose models. Requires the Mongoose root module to be availalble in the application.
 * @author Bilal Shaikh
 * @copyright BioSimulations Team, 2020
 * @license MIT
 */
import { Module } from '@nestjs/common';

import { ResultsService } from './results.service';
import { ResultsController } from './results.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SimulationRunModel, SimulationRunModelSchema } from '../simulation-run/simulation-run.model';
import { BiosimulationsAuthModule } from '@biosimulations/auth/nest';
import { SimdataApiNestClientWrapperModule } from '@biosimulations/simdata-api/nest-client-wrapper';

@Module({
  imports: [
    BiosimulationsAuthModule,
    SimdataApiNestClientWrapperModule,
    MongooseModule.forFeature([{ name: SimulationRunModel.name, schema: SimulationRunModelSchema }]),
  ],
  providers: [ResultsService],
  controllers: [ResultsController],
  exports: [ResultsService],
})
export class ResultsModule {}
