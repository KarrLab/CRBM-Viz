import { Module, CacheModule } from '@nestjs/common';

import { BiosimulationsConfigModule } from '@biosimulations/config/nest';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

import { SimulatorsModule } from '../simulators/simulators.module';
import { BiosimulationsAuthModule } from '@biosimulations/auth/nest';
import { SharedExceptionsFiltersModule } from '@biosimulations/shared/exceptions/filters';
import * as mongoose from 'mongoose';
import { HealthModule } from '../health/health.module';
import { OntologyApiModule } from '@biosimulations/ontology/api';
import * as redisStore from 'cache-manager-redis-store';

mongoose.set('strict', 'throw');
@Module({
  imports: [
    BiosimulationsConfigModule,
    BiosimulationsAuthModule,
    MongooseModule.forRootAsync({
      imports: [BiosimulationsConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('database.uri') || '',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    SimulatorsModule,
    SharedExceptionsFiltersModule,
    HealthModule,
    OntologyApiModule,
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [BiosimulationsConfigModule],
      useFactory: async (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get('cache.host'),
        port: configService.get('cache.port'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
