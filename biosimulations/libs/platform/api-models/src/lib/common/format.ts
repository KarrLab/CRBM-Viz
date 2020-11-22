import { Format as IFormat } from '@biosimulations/datamodel/common';
import { ApiProperty, ApiExtraModels, OmitType } from '@nestjs/swagger';

export class Format implements IFormat {
  @ApiProperty()
  id!: string;
  @ApiProperty()
  name!: string;
  @ApiProperty()
  version!: string;
  @ApiProperty({ type: String, nullable: true })
  edamId!: string | null;
  @ApiProperty({ type: String, nullable: true, format: 'url' })
  specUrl!: string | null;
  @ApiProperty({ type: String, nullable: true, format: 'url' })
  url!: string | null;
  @ApiProperty({ type: String, nullable: true })
  mimetype!: string | null;
  @ApiProperty({ type: String, nullable: true })
  extension!: string | null;
  @ApiProperty({ type: String, nullable: true })
  sedUrn!: string | null;
}
