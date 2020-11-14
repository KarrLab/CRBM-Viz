/**
 * @file Module that declares the results controller for the api, the service that implements the controller methods, and the mongoose models. Requires the Mongoose root module to be availalble in the application.
 * @author Bilal Shaikh
 * @copyright Biosimulations Team, 2020
 * @license MIT
 */
import { Module } from '@nestjs/common';
import { ResultsService } from './results.service';
import { ResultsController } from './results.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ResultsModel, ResultsSchema } from './results.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ResultsModel.name, schema: ResultsSchema },
    ]),
  ],
  providers: [ResultsService],
  controllers: [ResultsController],
})
export class ResultsModule {}
