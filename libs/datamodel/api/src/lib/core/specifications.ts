import {
  ApiProperty,
  ApiResponseProperty,
  getSchemaPath,
  ApiExtraModels,
} from '@nestjs/swagger';
import { SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import {
  SimulationRunSedDocument as ISimulationRunSedDocument,
  SedModel as ISedModel,
  SedModelAttributeChange as ISedModelAttributeChange,
  SedOneStepSimulation as ISedOneStepSimulation,
  SedSteadyStateSimulation as ISedSteadyStateSimulation,
  SedUniformTimeCourseSimulation as ISedUniformTimeCourseSimulation,
  SedAlgorithm as ISedAlgorithm,
  SedAlgorithmParameterChange as ISedAlgorithmParameterChange,
  SedTask as ISedTask,
  SedRepeatedTask as ISedRepeatedTask,
  SedDataGenerator as ISedDataGenerator,
  SedReport as ISedReport,
  SedPlot2D as ISedPlot2D,
  SedPlot3D as ISedPlot3D,
  SedDataSet as ISedDataSet,
  SedCurve as ISedCurve,
  SedSurface as ISedSurface,
  SedVariable as ISedVariable,
  SedTarget as ISedTarget,
  Namespace as INamespace,
  SedAxisScale,
} from '@biosimulations/datamodel/common';
import {
  IsString,
  IsOptional,
  IsNumber,
  IsUrl,
  ValidateNested,
  IsEnum,
  Equals,
} from 'class-validator';
import { Type } from 'class-transformer';

export class Namespace implements INamespace {
  @ApiProperty({ type: String, enum: ['Namespace'] })
  @Equals('Namespace')
  public _type!: 'Namespace';

  @ApiProperty({
    type: String,
    example: 'sbml',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  public prefix?: string;

  @ApiProperty({
    type: String,
    example: 'http://www.sbml.org/sbml/level2/version4',
  })
  @IsUrl({
    require_protocol: true,
    protocols: ['http', 'https'],
  })
  public uri!: string;
}

export class SedTarget implements ISedTarget {
  @ApiProperty({ type: String, enum: ['SedTarget'] })
  @Equals('SedTarget')
  public _type!: 'SedTarget';

  @ApiProperty({ type: String })
  @IsString()
  public value!: string;

  @ApiProperty({ type: [Namespace], required: false, nullable: true })
  @Type(() => Namespace)
  @ValidateNested()
  public namespaces?: Namespace[];
}

export class SedModelAttributeChange implements ISedModelAttributeChange {
  @ApiProperty({ type: String, enum: ['SedModelAttributeChange'] })
  @Equals('SedModelAttributeChange')
  public _type!: 'SedModelAttributeChange';

  @ApiProperty({ type: String })
  @IsString()
  public id!: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsString()
  public name?: string;

  @ApiProperty({ type: SedTarget })
  @Type(() => SedTarget)
  public target!: SedTarget;

  @ApiProperty({ type: String })
  @IsString()
  public newValue!: string;
}

export type SedModelChange = SedModelAttributeChange;

@ApiExtraModels(SedModelAttributeChange)
export class SedModel implements ISedModel {
  @ApiProperty({ type: String, enum: ['SedModel'] })
  @Equals('SedModel')
  public _type!: 'SedModel';

  @ApiProperty({ type: String })
  @IsString()
  public id!: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsString()
  public name?: string;

  @ApiProperty({ type: String })
  @IsString()
  public language!: string;

  @ApiProperty({ type: String })
  @IsString()
  public source!: string;

  @ApiProperty({
    oneOf: [{ $ref: getSchemaPath(SedModelAttributeChange) }],
  })
  @Type(() => Object, {
    discriminator: {
      property: '_type',
      subTypes: [
        { value: SedModelAttributeChange, name: 'SedModelAttributeChange' },
      ],
    },
  })
  @ValidateNested()
  public changes!: SedModelChange[];
}

export class SedAlgorithmParameterChange
  implements ISedAlgorithmParameterChange
{
  @ApiProperty({ type: String, enum: ['SedAlgorithmParameterChange'] })
  @Equals('SedAlgorithmParameterChange')
  public _type!: 'SedAlgorithmParameterChange';

  @ApiProperty({
    type: String,
    example: 'KISAO_0000488',
    pattern: '^KISAO_\\d{7,7}$',
  })
  @IsString()
  public kisaoId!: string;

  @ApiProperty({ type: String })
  @IsString()
  public newValue!: string;
}

export class SedAlgorithm implements ISedAlgorithm {
  @ApiProperty({ type: String, enum: ['SedAlgorithm'] })
  @Equals('SedAlgorithm')
  public _type!: 'SedAlgorithm';

  @ApiProperty({
    type: String,
    example: 'KISAO_0000019',
    pattern: '^KISAO_\\d{7,7}$',
  })
  @IsString()
  public kisaoId!: string;

  @ApiProperty({ type: [SedAlgorithmParameterChange] })
  @Type(() => SedAlgorithmParameterChange)
  @ValidateNested()
  public changes!: SedAlgorithmParameterChange[];
}

export class SedUniformTimeCourseSimulation
  implements ISedUniformTimeCourseSimulation
{
  @ApiProperty({ type: String, enum: ['SedUniformTimeCourseSimulation'] })
  @Equals('SedUniformTimeCourseSimulation')
  public _type!: 'SedUniformTimeCourseSimulation';

  @ApiProperty({ type: String })
  @IsString()
  public id!: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsString()
  public name?: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  public initialTime!: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  public outputStartTime!: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  public outputEndTime!: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  public numberOfSteps!: number;

  @ApiProperty({ type: SedAlgorithm })
  @Type(() => SedAlgorithm)
  public algorithm!: SedAlgorithm;
}

export class SedSteadyStateSimulation implements ISedSteadyStateSimulation {
  @ApiProperty({ type: String, enum: ['SedSteadyStateSimulation'] })
  @Equals('SedSteadyStateSimulation')
  public _type!: 'SedSteadyStateSimulation';

  @ApiProperty({ type: String })
  @IsString()
  public id!: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsString()
  public name?: string;

  @ApiProperty({ type: SedAlgorithm })
  @Type(() => SedAlgorithm)
  public algorithm!: SedAlgorithm;
}

export class SedOneStepSimulation implements ISedOneStepSimulation {
  @ApiProperty({ type: String, enum: ['SedOneStepSimulation'] })
  @Equals('SedOneStepSimulation')
  public _type!: 'SedOneStepSimulation';

  @ApiProperty({ type: String })
  @IsString()
  public id!: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsString()
  public name?: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  public step!: number;

  @ApiProperty({ type: SedAlgorithm })
  @Type(() => SedAlgorithm)
  public algorithm!: SedAlgorithm;
}

export type SedSimulation =
  | SedUniformTimeCourseSimulation
  | SedSteadyStateSimulation
  | SedOneStepSimulation;

export const SedSimulationSchema: SchemaObject = {
  oneOf: [
    { $ref: getSchemaPath(SedUniformTimeCourseSimulation) },
    { $ref: getSchemaPath(SedSteadyStateSimulation) },
    { $ref: getSchemaPath(SedOneStepSimulation) },
  ],
};

@ApiExtraModels(SedUniformTimeCourseSimulation)
@ApiExtraModels(SedSteadyStateSimulation)
@ApiExtraModels(SedOneStepSimulation)
export class SedTask implements ISedTask {
  @ApiProperty({ type: String, enum: ['SedTask'] })
  @Equals('SedTask')
  public _type!: 'SedTask';

  @ApiProperty({ type: String })
  @IsString()
  public id!: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsString()
  public name?: string;

  @ApiProperty({ type: SedModel })
  @Type(() => SedModel)
  public model!: SedModel;

  @ApiProperty({
    oneOf: [
      { $ref: getSchemaPath(SedUniformTimeCourseSimulation) },
      { $ref: getSchemaPath(SedSteadyStateSimulation) },
      { $ref: getSchemaPath(SedOneStepSimulation) },
    ],
  })
  @Type(() => Object, {
    discriminator: {
      property: '_type',
      subTypes: [
        { value: SedOneStepSimulation, name: 'SedOneStepSimulation' },
        { value: SedSteadyStateSimulation, name: 'SedSteadyStateSimulation' },
        { value: SedUniformTimeCourseSimulation, name: 'SedUniformTimeCourseSimulation' },
      ],
    },
  })
  public simulation!: SedSimulation;
}

export class SedRepeatedTask implements ISedRepeatedTask {
  @ApiProperty({ type: String, enum: ['SedRepeatedTask'] })
  @Equals('SedRepeatedTask')
  public _type!: 'SedRepeatedTask';

  @ApiProperty({ type: String })
  @IsString()
  public id!: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsString()
  public name?: string;
}

export type SedAbstractTask = SedTask | SedRepeatedTask;

export class SedVariable implements ISedVariable {
  @ApiProperty({ type: String, enum: ['SedVariable'] })
  @Equals('SedVariable')
  public _type!: 'SedVariable';

  @ApiProperty({ type: String })
  @IsString()
  public id!: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsString()
  public name?: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsString()
  public symbol?: string;

  @ApiProperty({ type: SedTarget, required: false, nullable: true })
  @Type(() => SedTarget)
  public target?: SedTarget;

  @ApiProperty({ type: SedTask })
  @Type(() => SedTask)
  public task!: SedTask;
}

export class SedDataGenerator implements ISedDataGenerator {
  @ApiProperty({ type: String, enum: ['SedDataGenerator'] })
  @Equals('SedDataGenerator')
  public _type!: 'SedDataGenerator';

  @ApiProperty({ type: String })
  @IsString()
  public id!: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsString()
  public name?: string;

  @ApiProperty({ type: [SedVariable] })
  @Type(() => SedVariable)
  @ValidateNested()
  public variables!: SedVariable[];

  @ApiProperty({ type: String })
  @IsString()
  public math!: string;
}

export class SedDataSet implements ISedDataSet {
  @ApiProperty({ type: String, enum: ['SedDataSet'] })
  @Equals('SedDataSet')
  public _type!: 'SedDataSet';

  @ApiProperty({ type: String })
  @IsString()
  public id!: string;

  @ApiProperty({ type: SedDataGenerator })
  @Type(() => SedDataGenerator)
  public dataGenerator!: SedDataGenerator;

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsString()
  public name?: string;

  @ApiProperty({ type: String })
  @IsString()
  public label!: string;
}

export class SedReport implements ISedReport {
  @ApiProperty({ type: String, enum: ['SedReport'] })
  @Equals('SedReport')
  public _type!: 'SedReport';

  @ApiProperty({ type: String })
  @IsString()
  public id!: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsString()
  public name?: string;

  @ApiProperty({ type: [SedDataSet] })
  @Type(() => SedDataSet)
  @ValidateNested()
  public dataSets!: SedDataSet[];
}

export class SedCurve implements ISedCurve {
  @ApiProperty({ type: String, enum: ['SedCurve'] })
  @Equals('SedCurve')
  public _type!: 'SedCurve';

  @ApiProperty({ type: String })
  @IsString()
  public id!: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsString()
  public name?: string;

  @ApiProperty({ type: SedDataGenerator })
  @Type(() => SedDataGenerator)
  public xDataGenerator!: SedDataGenerator;

  @ApiProperty({ type: SedDataGenerator })
  @Type(() => SedDataGenerator)
  public yDataGenerator!: SedDataGenerator;
}

export class SedPlot2D implements ISedPlot2D {
  @ApiProperty({ type: String, enum: ['SedPlot2D'] })
  @Equals('SedPlot2D')
  public _type!: 'SedPlot2D';

  @ApiProperty({ type: String })
  @IsString()
  public id!: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsString()
  public name?: string;

  @ApiProperty({ type: [SedCurve] })
  @Type(() => SedCurve)
  @ValidateNested()
  public curves!: SedCurve[];

  @ApiProperty({ type: String, enum: SedAxisScale })
  @IsEnum(SedAxisScale)
  public xScale!: SedAxisScale;

  @ApiProperty({ type: String, enum: SedAxisScale })
  @IsEnum(SedAxisScale)
  public yScale!: SedAxisScale;
}

export class SedSurface implements ISedSurface {
  @ApiProperty({ type: String, enum: ['SedSurface'] })
  @Equals('SedSurface')
  public _type!: 'SedSurface';

  @ApiProperty({ type: String })
  @IsString()
  public id!: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsString()
  public name?: string;

  @ApiProperty({ type: SedDataGenerator })
  @Type(() => SedDataGenerator)
  public xDataGenerator!: SedDataGenerator;

  @ApiProperty({ type: SedDataGenerator })
  @Type(() => SedDataGenerator)
  public yDataGenerator!: SedDataGenerator;

  @ApiProperty({ type: SedDataGenerator })
  @Type(() => SedDataGenerator)
  public zDataGenerator!: SedDataGenerator;
}

export class SedPlot3D implements ISedPlot3D {
  @ApiProperty({ type: String, enum: ['SedPlot3D'] })
  @Equals('SedPlot3D')
  public _type!: 'SedPlot3D';

  @ApiProperty({ type: String })
  @IsString()
  public id!: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsString()
  public name?: string;

  @ApiProperty({ type: [SedSurface] })
  @Type(() => SedSurface)
  @ValidateNested()
  public surfaces!: SedSurface[];

  @ApiProperty({ type: String, enum: SedAxisScale })
  @IsEnum(SedAxisScale)
  public xScale!: SedAxisScale;

  @ApiProperty({ type: String, enum: SedAxisScale })
  @IsEnum(SedAxisScale)
  public yScale!: SedAxisScale;

  @ApiProperty({ type: String, enum: SedAxisScale })
  @IsEnum(SedAxisScale)
  public zScale!: SedAxisScale;
}

export type SedOutput = SedReport | SedPlot2D | SedPlot3D;

export const SedOutputSchema: SchemaObject = {
  oneOf: [
    { $ref: getSchemaPath(SedReport) },
    { $ref: getSchemaPath(SedPlot2D) },
    { $ref: getSchemaPath(SedPlot3D) },
  ],
};

@ApiExtraModels(SedUniformTimeCourseSimulation)
@ApiExtraModels(SedSteadyStateSimulation)
@ApiExtraModels(SedOneStepSimulation)
@ApiExtraModels(SedReport)
@ApiExtraModels(SedPlot2D)
@ApiExtraModels(SedPlot3D)
export class SimulationRunSedDocument implements ISimulationRunSedDocument {
  @ApiProperty({ type: String })
  @IsString()
  public id!: string;

  @ApiProperty({ type: String })
  @IsString()
  public simulationRun!: string;

  @ApiProperty({ type: [SedModel] })
  @Type(() => SedModel)
  @ValidateNested()
  public models!: SedModel[];

  @ApiProperty({
    type: 'array',
    items: {
      oneOf: [
        { $ref: getSchemaPath(SedOneStepSimulation) },
        { $ref: getSchemaPath(SedSteadyStateSimulation) },
        { $ref: getSchemaPath(SedUniformTimeCourseSimulation) },
      ],
    },
  })
  @Type(() => Object, {
    discriminator: {
      property: '_type',
      subTypes: [
        { value: SedOneStepSimulation, name: 'SedOneStepSimulation' },
        { value: SedSteadyStateSimulation, name: 'SedSteadyStateSimulation' },
        { value: SedUniformTimeCourseSimulation, name: 'SedUniformTimeCourseSimulation' },
      ],
    },
  })
  @ValidateNested()
  public simulations!: SedSimulation[];

  @ApiProperty({ type: [SedDataGenerator] })
  @Type(() => SedDataGenerator)
  @ValidateNested()
  public dataGenerators!: SedDataGenerator[];

  @ApiProperty({
    type: 'array',
    items: {
      oneOf: [
        { $ref: getSchemaPath(SedReport) },
        { $ref: getSchemaPath(SedPlot2D) },
        { $ref: getSchemaPath(SedPlot3D) },
      ],
    },
  })
  @Type(() => Object, {
    discriminator: {
      property: '_type',
      subTypes: [
        { value: SedReport, name: 'SedReport' },
        { value: SedPlot2D, name: 'SedPlot2D' },
        { value: SedPlot3D, name: 'SedPlot3D' },
      ],
    },
  })
  @ValidateNested()
  public outputs!: SedOutput[];

  @ApiProperty({ type: [SedTask] })
  @Type(() => SedTask)
  @ValidateNested()
  public tasks!: SedTask[];

  @ApiResponseProperty({
    type: String,
    format: 'date-time',
    // description: 'Timestamp when the specifications were created',
  })
  @IsString()
  public created!: string;

  @ApiResponseProperty({
    type: String,
    format: 'date-time',
    // description: 'Timestamp when the specifications were last updated',
  })
  @IsString()
  public updated!: string;
}
