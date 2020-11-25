export enum Ontologies {
  KISAO = 'KISAO',
  SBO = 'SBO',
  EDAM = 'EDAM',
  SIO = 'SIO',
  SPDX = 'SPDX',
}

export interface OntologyInfo {
  id: string | null,
  acronym: string | null,
  name: string,
  description: string,
  bioportalId: string | null;
  olsId: string | null;
  version: string | null;
  source: string;
}

export const EdamIdRegEx = /^(data|topic|operation|format)_\d{4}$/;

export const EdamFormatIdRegEx = /^format_\d{4}$/;
export const KisaoIdRegEx = /^KISAO_\d{7}$/; //sourced from identifiers.org
export const SboIdRegEx = /^SBO_\d{7}$/;
export const SioIdRegEx = /^SIO_\d{6}$/;

export interface IdentifierBase {
  namespace: string;
  id: string;
}

export interface Identifier extends IdentifierBase {
  namespace: string;
  id: string;
  url: string;
}
export interface IOntologyId extends IdentifierBase {
  namespace: Ontologies;
  id: string;
}
export interface IEdamOntologyId extends IOntologyId {
  namespace: Ontologies.EDAM;
  id: string;
}
export interface IEdamOntologyIdVersion extends IEdamOntologyId {
  namespace: Ontologies.EDAM;
  id: string;
  version: string | null;
}
export interface IKisaoOntologyId extends IOntologyId {
  namespace: Ontologies.KISAO;
  id: string;
}

export interface ISboOntologyId extends IOntologyId {
  namespace: Ontologies.SBO;
  id: string;
}

export interface ISioOntologyId extends IOntologyId {
  namespace: Ontologies.SIO;
  id: string;
}
export interface ISpdxId extends IOntologyId {
  namespace: Ontologies.SPDX;
  id: string;
}
export interface IOntologyTerm extends IOntologyId {
  namespace: Ontologies;
  id: string;
  iri: string | null;
  url: string;
  moreInfoUrl: string | null;
  name: string;
  description: string | null;
}
export interface IdentifierTerm extends Identifier {
  namespace: Ontologies;
  id: string;
  name: string;
  description?: string | null;
  url: string;
}
export interface KisaoTerm extends IKisaoOntologyId {
  namespace: Ontologies.KISAO;
  id: string;
  name: string;
  description: string | null;
  iri: string;
  url: string;
  moreInfoUrl: string | null;
}

export interface SboTerm extends IOntologyTerm {
  namespace: Ontologies.SBO;
  id: string;
  name: string;
  description: string | null;
  iri: string;
  url: string;
  moreInfoUrl: null;
}

export interface EdamTerm extends IOntologyTerm {
  namespace: Ontologies.EDAM;
  id: string;
  name: string;
  description: string | null;
  iri: string;
  url: string;
  moreInfoUrl: string | null;
}

export interface SioTerm extends IOntologyTerm {
  namespace: Ontologies.SIO;
  id: string;
  name: string;
  description: string | null;
  iri: string;
  url: string;
  moreInfoUrl: string | null;
}

export interface SpdxTerm extends IdentifierTerm {
  namespace: Ontologies.SPDX;
  id: string;
  name: string;
  description: null;
  iri: null;
  url: string;
  moreInfoUrl: string | null;
}
// Identifiers.org identifier
