import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import serverConfig from './biosimulations-server-config';
import databaseConfig from './biosimulations-database-config';
import authConfig from './biosimulations-auth-config';
import hpcConfig from './biosimulations-hpc-config';
import natsConfig from './biosimulations-nats-config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, authConfig, serverConfig, hpcConfig, natsConfig],
      envFilePath: [
        './config/config.env',
        './secret/secret.env',
        './config/config.dev.env',
        './secret/secret.dev.env',
        './config.env',
        './secret.env',
      ],
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class BiosimulationsConfigModule {}
