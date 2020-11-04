import { Ontologies } from '@biosimulations/shared/datamodel';
import { Module } from '@nestjs/common';
import { OntologiesModule } from '@biosimulations/ontology/ontologies'
import { BiosimulationsConfigModule } from '@biosimulations/config/nest';
import { SwaggerModule } from '@nestjs/swagger';

@Module({
  imports: [OntologiesModule, SwaggerModule, BiosimulationsConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
