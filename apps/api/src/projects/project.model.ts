import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as SchemaType } from 'mongoose';
import { SimulationRunModel } from '../simulation-run/simulation-run.model';
import { projectIdRegExp } from './id.regex';
import { Project } from '@biosimulations/datamodel/common';

@Schema({
  strict: 'throw',
  collection: 'Projects',
})
export class ProjectModel extends Document implements Omit<Project, 'created' | 'updated'> {
  @Prop({
    required: true,
    type: String,
    //add case insensitive index below
    immutable: true,
    validate: [
      {
        validator: (value: any): boolean => {
          return (typeof value === 'string' || value instanceof String) && value.match(projectIdRegExp) !== null;
        },
        message: (props: any): string =>
          `'${props.value}' is not a valid project id. Project ids must be a combination of at least three letters, numbers, underscores, and dashes (^[a-zA-Z0-9_-]{3,}$).`,
      },
    ],
  })
  public id!: string;

  @Prop({
    ref: SimulationRunModel.name,
    required: true,
    type: String,
    unique: true,
    index: true,
    immutable: false,
  })
  public simulationRun!: string;

  @Prop({
    required: false,
    type: String,
    immutable: false,
  })
  public owner?: string;

  public created!: Date;
  public updated!: Date;
}

export const ProjectModelSchema: SchemaType<ProjectModel> = SchemaFactory.createForClass(ProjectModel);
ProjectModelSchema.set('timestamps', {
  createdAt: 'created',
  updatedAt: 'updated',
});

export const ProjectIdCollation = {
  locale: 'en',
  strength: 1,
  numericOrdering: true,
};
ProjectModelSchema.index({ id: 1 }, { collation: ProjectIdCollation, unique: true });
ProjectModelSchema.index({ simulationRun: 1 }, { unique: true });
