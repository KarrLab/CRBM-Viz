import { SimulationRunStatus } from '@biosimulations/datamodel/common';
import {
  DispatchJob,
  JobQueue,
  MonitorJob,
} from '@biosimulations/messages/messages';
import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job, Queue } from 'bull';

import { HpcService } from '../services/hpc/hpc.service';
import { SimulationStatusService } from '../services/simulationStatus.service';

@Processor(JobQueue.dispatch)
export class DispatchProcessor {
  private readonly logger = new Logger(DispatchProcessor.name);
  public constructor(
    private hpcService: HpcService,
    private simStatusService: SimulationStatusService,

    @InjectQueue(JobQueue.monitor) private monitorQueue: Queue<MonitorJob>,
  ) {}
  @Process()
  private async handleSubmission(job: Job<DispatchJob>): Promise<void> {
    const data = job.data;

    this.logger.debug(`Starting job for simulation run ${data.simId} ...`);

    const response = await this.hpcService.submitJob(
      data.simId,
      data.simulator,
      data.version,
      data.cpus,
      data.memory,
      data.maxTime,
      data.envVars,
      data.purpose,
      data.fileName,
    );

    if (response.stderr != '') {
      // There was an error with submission of the job
      const message = `An error occurred in submitting an HPC job for simulation run '${data.simId}': ${response.stderr}`;
      this.logger.error(message);
      this.simStatusService.updateStatus(
        data.simId,
        SimulationRunStatus.FAILED,
        message,
      );
    } else if (response.stdout != null) {
      // Get the Slurm id of the job
      // Expected output of the response is " Submitted batch job <ID> /n"
      const slurmjobId = response.stdout.trim().split(' ').slice(-1)[0];

      const monitorData: MonitorJob = {
        slurmJobId: slurmjobId.toString(),
        simId: data.simId,
        projectId: data.projectId,
        projectOwner: data.projectOwner,
        retryCount: 0,
      };

      this.monitorQueue.add(monitorData);
    }
  }
}
