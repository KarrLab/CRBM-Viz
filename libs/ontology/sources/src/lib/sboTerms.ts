import {
  Ontologies,
  SboTerm,
  OntologyInfo,
} from '@biosimulations/datamodel/common';

import sboJson from './sbo.json';
import { sboCorrections } from '@biosimulations/ontology/extra-sources';

let sboVersion = '';
function getSboTerms(input: any): { [id: string]: SboTerm } {
  const Terms: { [id: string]: SboTerm } = {};

  const jsonParse = input['@graph'];
  jsonParse.forEach((jsonTerm: any) => {
    if (jsonTerm['@id'] === 'http://biomodels.net/SBO/') {
      sboVersion = jsonTerm['owl:versionInfo'];
    } else if (jsonTerm['@id'].startsWith('http://biomodels.net/SBO/')) {
      const termIRI = jsonTerm['@id'];
      const termNameSpace = Ontologies.SBO;
      const termId = jsonTerm['@id'].replace('http://biomodels.net/SBO/', '');
      const termDescription = jsonTerm['rdfs:comment'] || null;
      const termName = jsonTerm['rdfs:label'];
      const termUrl =
        'https://www.ebi.ac.uk/ols/ontologies/sbo/terms?iri=' +
        encodeURIComponent('http://biomodels.net/SBO/' + termId);

      let parents!: string[];
      if ('rdfs:subClassOf' in jsonTerm) {
        parents = (
          Array.isArray(jsonTerm['rdfs:subClassOf'])
            ? jsonTerm['rdfs:subClassOf']
            : [jsonTerm['rdfs:subClassOf']]
        )
          .filter((term: string): boolean => {
            return term.startsWith('http://biomodels.net/SBO/');
          })
          .map((term) => term.replace('http://biomodels.net/SBO/', ''));
      } else {
        parents = [];
      }

      const term: SboTerm = {
        id: termId,
        name: termName,
        description: termDescription,
        namespace: termNameSpace,
        iri: termIRI,
        url: termUrl,
        moreInfoUrl: null,
        parents: parents,
        children: [],
      };

      Terms[termId] = term;
    } else {
      return;
    }
  });

  sboCorrections.forEach((sboCorrection): void => {
    const term = Terms?.[sboCorrection.id];
    term.parents = sboCorrection.parents;
  });

  Object.values(Terms).forEach((term: SboTerm): void => {
    term.parents.forEach((parent: string): void => {
      Terms[parent].children.push(term.id);
    });
  });

  return Terms;
}

export const sboTerms = getSboTerms(sboJson);

export const sboInfo: OntologyInfo = {
  id: Ontologies.SBO,
  acronym: Ontologies.SBO,
  name: 'Systems Biology Ontology',
  description:
    'Terms commonly used in Systems Biology, and in particular in computational modeling.',
  bioportalId: 'SBO',
  olsId: 'sbo',
  version: sboVersion,
  source: 'http://www.ebi.ac.uk/sbo/exports/Main/SBO_OWL.owl',
};
