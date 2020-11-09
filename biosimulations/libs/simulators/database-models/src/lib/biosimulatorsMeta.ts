import {
  IBiosimulatorsMeta,
  imageVersions,
  specificationVersions,
} from '@biosimulations/datamodel/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  _id: false,
  storeSubdocValidationError: false,
  strict: 'throw',
  useNestedStrict: true,
})
export class BiosimulatorsMeta implements IBiosimulatorsMeta {
  @Prop({
    type: String,
    required: true,
    default: specificationVersions.latest,
    enum: Object.keys(specificationVersions).map(
      (k) => specificationVersions[k as specificationVersions]
    ),
  })
  specificationVersion!: specificationVersions;

  @Prop({
    type: String,
    required: true,
    enum: Object.keys(imageVersions).map(
      (k) => imageVersions[k as imageVersions]
    ),
    default: imageVersions.latest,
  })
  imageVersion!: imageVersions;

  @Prop({ type: Object, required: false })
  meta: any;
  @Prop({ type: Boolean, required: true })
  validated!: boolean;
}
export const BiosimulatorsInfoSchema = SchemaFactory.createForClass(
  BiosimulatorsMeta
);
