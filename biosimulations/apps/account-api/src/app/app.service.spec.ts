import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { BiosimulationsConfigModule } from '@biosimulations/config/nest';
import { Account } from './account.model';
import { BiosimulationsAuthModule } from '@biosimulations/auth/nest';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        BiosimulationsConfigModule,
        TypegooseModule.forRootAsync({
          imports: [BiosimulationsConfigModule],
          useFactory: async (configService: ConfigService) => ({
            uri: configService.get('database.uri') as string,
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }),
          inject: [ConfigService],
        }),
        TypegooseModule.forFeature([Account]),
        BiosimulationsAuthModule,
      ],
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
