import { Ontologies, LinguistTerm, OntologyInfo, OntologyTermMap } from '@biosimulations/datamodel/common';
import linguistJson from './linguist.json';

function getLinguistTerms(input: any): OntologyTermMap<LinguistTerm> {
  const terms: OntologyTermMap<LinguistTerm> = {};
  input.forEach((language: any): void => {
    if (language?.type === 'programming') {
      terms[language.name] = {
        id: language.name,
        namespace: Ontologies.Linguist,
        name: null,
        iri: null,
        url: null,
        moreInfoUrl: null,
        description: null,
        parents: [],
        children: [],
      };
    }
  });
  return terms;
}

export const linguistTerms = getLinguistTerms(linguistJson);

export const linguistInfo: OntologyInfo = {
  id: Ontologies.Linguist,
  acronym: 'Linguist',
  name: 'Linguist programming languages',
  description: 'List of programming languages supported by Linguist.',
  bioportalId: null,
  olsId: null,
  version: null,
  source: 'https://raw.githubusercontent.com/jaebradley/github-languages-client/master/src/languages.json',
};
