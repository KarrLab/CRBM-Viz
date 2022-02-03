/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/**
 * @file Contains the mongoose model definition for a simulation run. The COMBINE/OMEX archive file is stored as a ObjectId refrence to the file also stored in the database.
 * @author Bilal Shaikh
 * @copyright BioSimulations Team, 2020
 * @license MIT
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  SimulationRun,
  SimulationRunStatus,
  Purpose,
} from '@biosimulations/datamodel/common';
import { omitPrivate } from '@biosimulations/datamodel-database';
import { isUrl } from '@biosimulations/datamodel-database';

@Schema({
  _id: false,
  storeSubdocValidationError: false,
  strict: 'throw',
})
export class EnvironmentVariable {
  @Prop({ type: String, required: true })
  key!: string;

  @Prop({ type: String, required: true })
  value!: string;
}
export const EnvironmentVariableSchema =
  SchemaFactory.createForClass(EnvironmentVariable);

@Schema({ collection: 'Simulation Runs', id: false })
export class SimulationRunModel extends Document implements SimulationRun {
  @Prop({ required: true, unique: true, index: true })
  id!: string;

  @Prop({
    type: String,
    required: true,
    validate: [isUrl],
  })
  fileUrl!: string;

  @Prop({ type: String, required: true })
  name!: string;

  @Prop({
    type: String,
    required: false,
    default: null,
  })
  email!: string | null;

  @Prop({
    type: String,
    enum: Object.keys(SimulationRunStatus).map(
      (key) => SimulationRunStatus[key as SimulationRunStatus],
    ),

    default: SimulationRunStatus.CREATED,
  })
  status!: SimulationRunStatus;

  @Prop({
    type: Number,
    required: false,
  })
  runtime?: number;

  @Prop({
    type: Number,
    required: false,
  })
  projectSize?: number;

  @Prop({
    type: Number,
    required: false,
  })
  resultsSize?: number;

  @Prop({ type: String, required: true })
  simulator!: string;

  @Prop({ type: String, required: true })
  simulatorVersion!: string;

  @Prop({
    type: String,
    required: true,
    default: undefined,
  })
  simulatorDigest!: string;

  @Prop({
    type: Number,
    required: false,
    default: 1,
  })
  cpus!: number;

  @Prop({
    type: Number,
    required: false,
    default: 8,
  })
  memory!: number;

  @Prop({
    type: Number,
    required: false,
    default: 20,
  })
  maxTime!: number;

  @Prop({
    type: [EnvironmentVariableSchema],
    required: false,
    default: [],
  })
  envVars!: EnvironmentVariable[];

  @Prop({
    type: String,
    enum: Object.keys(Purpose).map((key) => Purpose[key as Purpose]),
    required: false,
    default: Purpose.other,
  })
  purpose!: Purpose;

  @Prop()
  submitted!: Date;

  @Prop()
  updated!: Date;

  @Prop({ type: Number, default: 0 })
  refreshCount!: number;
}

export type SimulationRunModelType = Pick<
  SimulationRunModel,
  | 'id'
  | 'name'
  | 'email'
  | 'status'
  | 'runtime'
  | 'projectSize'
  | 'resultsSize'
  | 'simulator'
  | 'simulatorVersion'
  | 'simulatorDigest'
  | 'cpus'
  | 'memory'
  | 'maxTime'
  | 'envVars'
  | 'purpose'
  | 'refreshCount'
  | 'submitted'
  | 'updated'
  | '__v'
  | '_id'
>;
export type TestType = Exclude<SimulationRunModel, Document>;
export type SimulationRunModelReturnType = Omit<
  SimulationRunModelType,
  '__v' | '_id' | 'file'
> & { _id: never; __v: never };
export const SimulationRunModelSchema =
  SchemaFactory.createForClass(SimulationRunModel);
SimulationRunModelSchema.set('timestamps', {
  createdAt: 'submitted',
  updatedAt: 'updated',
});
SimulationRunModelSchema.set('toObject', { transform: omitPrivate });
SimulationRunModelSchema.set('toJSON', { transform: omitPrivate });

/*
export interface SimulationRunField {
  id: string;

  [key: string]: any;
}
*/
