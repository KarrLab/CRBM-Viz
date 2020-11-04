import {
  IOntologyTerm,
  Ontologies,
  Identifier as IIdentifier,
} from '@biosimulations/shared/datamodel';
import { ApiProperty } from '@nestjs/swagger';

export class OntologyTerm implements IOntologyTerm {
  @ApiProperty({ enum: Ontologies })
  namespace!: Ontologies;
  @ApiProperty()
  id!: string;
  @ApiProperty()
  name!: string | null;
  @ApiProperty({ type: String, nullable: true })
  description!: string | null;
  @ApiProperty({ type: String, nullable: true })
  iri!: string | null;
}

export class Identifier implements IIdentifier {
  @ApiProperty()
  namespace!: string;
  @ApiProperty()
  id!: string;
  @ApiProperty({ type: String, nullable: true })
  url?: string | null;
}
