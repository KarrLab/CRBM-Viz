import { Module } from '@nestjs/common';

import { BiosimulationsConfigModule } from '@biosimulations/config/nest';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

import { SimulatorsModule } from '../simulators/simulators.module';
import { BiosimulationsAuthModule } from '@biosimulations/auth/nest';
import { SharedExceptionsModule } from '@biosimulations/shared/exceptions';
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
    SharedExceptionsModule,
  ],
})
export class AppModule {}
