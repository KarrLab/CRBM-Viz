import { AlgorithmParameterDTO } from '@biosimulations/datamodel/core';
import { JsonSerializable } from '@biosimulations/datamodel/utils';

export class AlgorithmParameter
  implements JsonSerializable<AlgorithmParameterDTO> {
  name: string;
  id: string;
  value: number;
  kisaoId: string;
  constructor(data: AlgorithmParameterDTO) {
    Object.assign(this, data);
  }
  serialize(): AlgorithmParameterDTO {
    return {
      name: this.name,
      id: this.id,
      value: this.value,
      kisaoId: this.kisaoId,
    };
  }

  getUrl(): string {
    const ontology = 'KISAO';
    const id: string = this.kisaoId.toString().padStart(7, '0');
    const iri = `http://www.biomodels.net/kisao/KISAO#KISAO_${id}`;
    return `http://purl.bioontology.org/ontology/${ontology}?conceptid=${iri}`;
  }
}
