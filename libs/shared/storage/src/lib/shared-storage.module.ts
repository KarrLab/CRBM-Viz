import { Module, Global } from '@nestjs/common';
import { SharedStorageService } from './shared-storage.service';
import { S3Module } from 'nestjs-s3';
import { ConfigService } from '@nestjs/config';
import { BiosimulationsConfigModule } from '@biosimulations/config/nest';
import { SimulationStorageService } from './simulation-storage.service';
import { FilePaths } from './file-paths';

@Global()
@Module({
  controllers: [],
  imports: [
    BiosimulationsConfigModule,
    S3Module.forRootAsync({
      imports: [BiosimulationsConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        config: {
          credentials: {
            accessKeyId: configService.get('storage.accessKey') || '',
            secretAccessKey: configService.get('storage.secret') || '',
          },
          endpoint: configService.get('storage.endpoint'),
          region: configService.get('storage.region'),
          s3ForcePathStyle: true,
        },
      }),
    }),
  ],
  providers: [SharedStorageService, SimulationStorageService, FilePaths],
  // Dont export SharedStorageService, as it should only be used by the SimulationStorageService
  exports: [SimulationStorageService, FilePaths],
})
export class SharedStorageModule {}
