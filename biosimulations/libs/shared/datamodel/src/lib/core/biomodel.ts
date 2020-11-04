import { Identifier, PrimitiveType, IOntologyTerm, Format } from '../..';
import { Taxon } from '../common/taxon';
import { PrimaryResourceMetaData } from '../resources';
import { BiosimulationsId, UserId } from '../common';

export interface BiomodelParameter {
  target: string;
  group: string;
  id: string;
  name: string;
  description: string | null;
  identifiers: Identifier[];
  type: PrimitiveType;
  value: number | string | boolean;
  recommendedRange: (boolean | string | number)[];
  units: string;
}

// See isAlogrithmParameter method also. Used to differentiate between alg paramter
export const isBiomodelParameter = (param: any): param is BiomodelParameter =>
  'units' in param && 'id' in param && 'name' in param && 'value' in param;

export interface BiomodelVariable {
  target: string;
  group: string;
  id: string;
  name: string;
  description: string;
  type: PrimitiveType;
  units: string;
  identifiers: Identifier[];
}

// TODO include metadata
export interface BiomodelAttributes {
  taxon: Taxon | null;
  parameters: BiomodelParameter[];
  variables: BiomodelVariable[];
  framework: IOntologyTerm;
  format: Format;
}

export interface BiomodelRelationships {
  file: BiosimulationsId;
  owner: UserId;
  image: BiosimulationsId;
}
