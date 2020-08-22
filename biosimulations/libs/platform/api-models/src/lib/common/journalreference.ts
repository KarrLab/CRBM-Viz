import { JournalReference as IJournalReference } from '@biosimulations/shared/datamodel';
import { ApiProperty, ApiExtraModels, OmitType } from '@nestjs/swagger';

export class JournalReference implements IJournalReference {
  @ApiProperty()
  authors!: string;
  @ApiProperty()
  title!: string;
  @ApiProperty()
  journal!: string;
  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'number' }],
    nullable: true,
  })
  volume!: string | number | null;
  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'number' }],
    nullable: true,
  })
  issue!: string | number | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  pages!: string | null;
  @ApiProperty({ example: 2020 })
  year!: number;
  @ApiProperty({ type: String, nullable: true })
  doi!: string | null;
}
