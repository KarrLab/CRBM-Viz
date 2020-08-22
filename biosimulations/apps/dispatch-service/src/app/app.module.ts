import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { ConfigModule } from '@nestjs/config';
// import config from '../config/config';
import { HpcService } from './services/hpc/hpc.service';
import { SbatchService } from './services/sbatch/sbatch.service';
import { SshService } from './services/ssh/ssh.service';
import { BiosimulationsConfigModule } from '@biosimulations/config/nest';
import {
  ClientProxyFactory,
  Transport,
  NatsOptions,
} from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [BiosimulationsConfigModule],
  controllers: [AppController],
  providers: [
    HpcService,
    SbatchService,
    SshService,
    {
      provide: 'DISPATCH_MQ',
      useFactory: (configService: ConfigService) => {
        const natsServerConfig = configService.get('nats');
        const natsOptions: NatsOptions = {};
        natsOptions.transport = Transport.NATS;
        natsOptions.options = natsServerConfig;
        return ClientProxyFactory.create(natsOptions);
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
