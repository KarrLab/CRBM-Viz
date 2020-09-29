import { Controller, Get, Param, Query } from '@nestjs/common';
import { OntologiesService } from './ontologies.service';
import { kisaoTerms } from '@biosimulations/ontology/sources'
@Controller("/kisao")
export class KisaoController {
    constructor() { }


    @Get("list")
    getAll() {
        const terms = []
        for (const term in kisaoTerms) {
            terms.push(kisaoTerms[term])
        }
        return terms

    }

    @Get(':id')
    getTerm(@Param('id') id: string) {
        console.log(id)
        return kisaoTerms[id]
    }

    @Get("")
    describeOntology() {

    }



}
