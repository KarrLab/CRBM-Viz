/**
 * @file Contains the mongoose model definition for a Simulation Run. The omex file is stored as a ObjectId refrence to the file also stored in the database.
 * @author Bilal Shaikh
 * @copyright Biosimulations Team, 2020
 * @license MIT
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';
import * as EmailValidator from 'email-validator';
import { SimulationFile, SimulationFileSchema } from './file.model';
import { SimulationStatus } from '@biosimulations/datamodel/common';

// TODO move this to common utils
const omitPrivate = (doc: any, obj: any) => {
  delete obj.__v;
  delete obj._id;

  return obj;
};

@Schema({ collection: 'Simulation Runs', id: false })
export class SimulationRunModel extends Document {
  @Prop({ required: true, unique: true, index: true })
  id!: string;

  @Prop({ type: Types.ObjectId, ref: SimulationFile.name })
  file!: SimulationFile;
  @Prop({ type: String, required: true })
  name!: string;

  @Prop({
    type: String,
    required: false,
    default: null,
    validate: [{
      validator: (value: any): boolean => {
        return value == null || EmailValidator.validate(value);
      },
      message: (props: any): string => `${props.value} is not a valid email`,
    }]
  })
  email!: string;

  @Prop({
    type: String,
    enum: Object.keys(SimulationStatus).map(
      (key) => SimulationStatus[key as SimulationStatus]
    ),

    default: SimulationStatus.CREATED,
  })
  status!: SimulationStatus;

  @Prop()
  runtime!: number;

  @Prop()
  projectSize!: number;

  @Prop()
  resultsSize!: number;

  @Prop({ type: String, required: true })
  simulator!: string;

  @Prop({ type: String, required: true })
  simulatorVersion!: string;

  @Prop()
  submitted!: Date;

  @Prop()
  updated!: Date;

  @Prop({ type: Boolean, default: false })
  public!: boolean;
}

export type SimulationRunModelType = Pick<
  SimulationRunModel,
  | 'id'
  | 'file'
  | 'name'
  | 'email'
  | 'status'
  | 'runtime'
  | 'projectSize'
  | 'resultsSize'
  | 'simulator'
  | 'simulatorVersion'
  | 'submitted'
  | 'updated'
  | 'public'
  | '__v'
  | '_id'
>;
export type TestType = Exclude<SimulationRunModel, Document>;
export type SimulationRunModelReturnType = Omit<
  SimulationRunModelType,
  '__v' | '_id'
> & { _id: never; __v: never };
export const SimulationRunModelSchema = SchemaFactory.createForClass(
  SimulationRunModel
);
SimulationRunModelSchema.set('timestamps', {
  createdAt: 'submitted',
  updatedAt: 'updated',
});
SimulationRunModelSchema.set('toObject', { transform: omitPrivate });
SimulationRunModelSchema.set('toJSON', { transform: omitPrivate });
