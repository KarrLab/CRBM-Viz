import { Injectable } from '@angular/core';
import { urls } from '@biosimulations/config/common';
import { SimulationRunStatus } from '@biosimulations/dispatch/api-models';
import {
  DispatchPayload,
  DispatchMessage,
} from '@biosimulations/messages/messages';
import { HttpService, Inject, Logger } from '@nestjs/common';

import { ClientProxy } from '@nestjs/microservices';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { stat } from 'fs';

import { HpcService } from '../services/hpc/hpc.service';
import { SimulationRunService } from '../simulation-run/simulation-run.service';

@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  logger: Logger;
  constructor(
    private service: SimulationRunService,
    private hpcService: HpcService,
    private schedulerRegistry: SchedulerRegistry,
    @Inject('DISPATCH_MQ') private messageClient: ClientProxy
  ) {
    this.logger = new Logger(SubmissionService.name);
  }
  private createJob(jobId: string, simId: string, seconds: number) {
    const job = new CronJob(`*/${seconds.toString()} * * * * *`, async () => {
      const jobStatus: SimulationRunStatus = await this.hpcService.getJobStatus(
        jobId
      );
      this.logger.debug(
        `Checking status for job with id ${jobId} for simulation ${simId}: Status is ${jobStatus}`
      );

      switch (jobStatus) {
        case SimulationRunStatus.QUEUED: {
          const message: DispatchPayload = {
            _message: DispatchMessage.queued,
            id: simId,
          };
          this.messageClient.emit(DispatchMessage.queued, message);
          this.updateSimulationRunStatus(simId, jobStatus);

          break;
        }

        case SimulationRunStatus.RUNNING: {
          const runningMessage: DispatchPayload = {
            _message: DispatchMessage.started,
            id: simId,
          };
          this.messageClient.emit(DispatchMessage.started, runningMessage);
          this.updateSimulationRunStatus(simId, jobStatus);
          break;
        }

        case SimulationRunStatus.SUCCEEDED: {
          this.updateSimulationRunStatus(simId, jobStatus);
          const succeededMessage: DispatchPayload = {
            _message: DispatchMessage.finsihed,
            id: simId,
          };
          this.messageClient.emit(DispatchMessage.finsihed, succeededMessage);
          this.schedulerRegistry.getCronJob(jobId).stop();

          break;
        }
        case SimulationRunStatus.FAILED: {
          this.logger.error(`Job with id ${jobId} failed`);
          const update = this.updateSimulationRunStatus(
            simId,
            SimulationRunStatus.FAILED
          );

          const failedMessage: DispatchPayload = {
            _message: DispatchMessage.failed,
            id: simId,
          };
          this.messageClient.emit(DispatchMessage.failed, failedMessage);
          this.schedulerRegistry.getCronJob(jobId).stop();

          break;
        }
      }
    });
    return job;
  }
  async startMonitoringCronJob(jobId: string, simId: string, seconds: number) {
    const job = this.createJob(jobId, simId, seconds);
    this.schedulerRegistry.addCronJob(jobId, job);
    this.logger.debug(
      `Starting to monitor job with id ${jobId} for simulation ${simId}`
    );
    job.start();
  }

  async updateSimulationRunStatus(
    simId: string,
    simStatus: SimulationRunStatus
  ) {
    return this.service.updateSimulationRunStatus(simId, simStatus);
  }
}
