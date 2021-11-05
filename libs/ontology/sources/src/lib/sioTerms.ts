import {
  Ontologies,
  SioTerm,
  OntologyInfo,
  OntologyTermMap,
} from '@biosimulations/datamodel/common';
import isUrl from 'is-url';
import sioJson from './sio.json';

let sioVersion = '';
function getSioTerms(input: any): OntologyTermMap<SioTerm> {
  const Terms: OntologyTermMap<SioTerm> = {};

  const jsonParse = input['@graph'];
  jsonParse.forEach((jsonTerm: any) => {
    if (jsonTerm['@id'] === 'http://semanticscience.org/ontology/sio.owl') {
      sioVersion = jsonTerm['owl:versionInfo'];
    } else if (
      jsonTerm['@id'].startsWith('http://semanticscience.org/resource/SIO_')
    ) {
      const termIRI = jsonTerm['@id'];
      const termNameSpace = Ontologies.SIO;
      const termId = jsonTerm['@id'].replace(
        'http://semanticscience.org/resource/',
        '',
      );
      const termDescription = jsonTerm['rdfs:comment'] || null;
      const termName = jsonTerm['rdfs:label'];
      const termUrl =
        'https://www.ebi.ac.uk/ols/ontologies/sio/terms?iri=' +
        encodeURIComponent('http://semanticscience.org/resource/' + termId);

      let moreInfoUrl: string | null = null;
      const seeAlso = jsonTerm['http://www.w3.org/2000/01/rdf-schema#seeAlso'];
      if (
        seeAlso &&
        seeAlso?.['@type'] === 'xsd:anyURI' &&
        seeAlso?.['@value'] &&
        isUrl(seeAlso?.['@value'])
      ) {
        moreInfoUrl = seeAlso?.['@value'];
      }

      let parents!: string[];
      if ('rdfs:subClassOf' in jsonTerm) {
        parents = (
          Array.isArray(jsonTerm['rdfs:subClassOf'])
            ? jsonTerm['rdfs:subClassOf']
            : [jsonTerm['rdfs:subClassOf']]
        )
          .filter((term: string): boolean => {
            return term.startsWith('http://semanticscience.org/resource/');
          })
          .map((term) =>
            term.replace('http://semanticscience.org/resource/', ''),
          );
      } else {
        parents = [];
      }

      const term: SioTerm = {
        id: termId,
        name: termName,
        description: termDescription,
        namespace: termNameSpace,
        iri: termIRI,
        url: termUrl,
        moreInfoUrl: moreInfoUrl,
        parents: parents,
        children: [],
      };

      Terms[termId] = term;
    } else {
      return;
    }
  });

  Object.values(Terms).forEach((term: SioTerm): void => {
    term.parents.forEach((parent: string): void => {
      Terms[parent].children.push(term.id);
    });
  });

  return Terms;
}

export const sioTerms = getSioTerms(sioJson);

export const sioInfo: OntologyInfo = {
  id: Ontologies.SIO,
  acronym: Ontologies.SIO,
  name: 'Semanticscience Integrated Ontology',
  description:
    'The Semanticscience Integrated Ontology (SIO) provides a simple, integrated ontology of types and relations for rich description of objects, processes and their attributes.',
  bioportalId: 'SIO',
  olsId: 'sio',
  version: sioVersion,
  source:
    'https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/ontology/sio/release/sio-release.owl',
};
