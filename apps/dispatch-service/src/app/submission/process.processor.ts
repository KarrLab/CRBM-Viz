import { JobQueue } from '@biosimulations/messages/messages';
import { Processor, Process, InjectQueue } from '@ejhayes/nestjs-bullmq';
import { Logger } from '@nestjs/common';
import { FlowProducer, Job, Queue } from 'bullmq';

@Processor(JobQueue.process)
export class ProcessProcessor {
  private readonly logger = new Logger(ProcessProcessor.name);

  private flowProducer = new FlowProducer();
  public constructor(
    @InjectQueue(JobQueue.manifest) private manifestQueue: Queue,
    @InjectQueue(JobQueue.files) private filesQueue: Queue,
    @InjectQueue(JobQueue.extract) private extractQueue: Queue,
    @InjectQueue(JobQueue.thumbnailProcess)
    private thumbnailsQueue: Queue,
  ) {}

  @Process({ name: 'process', concurrency: 1 })
  private async process(job: Job): Promise<void> {
    // Called as soon as simulation is complete.
    this.logger.log(`Processing job ${job.id}`);

    const runId = job.data.runId;
    // Each job defined below should be as close to atomic as possible to enable retries.

    // 1. Get manifest from combine api
    const manifestJob = {
      name: 'Manifest',
      queueName: JobQueue.manifest,
      opts: {
        jobId: `${runId}`,
        attempts: 10,
        backoff: {
          type: 'exponential',
          delay: 1000,
        },
      },
      data: {
        runId: job.data.runId,
        description: 'Process the manifest file in the combine archive',
        moreInfo: 'https://combinearchive.org',
        validator: 'https://run.biosimulations.org/utils/validate-project',
        help: 'The manifest for the combine archive could not be processed',
        internalError: true,
        required: true,
      },
    };

    // Extract files from archive onto s3
    const extractJob = {
      name: 'Sedml',
      queueName: JobQueue.extract,
      opts: {
        jobId: `${runId}`,
      },
      data: {
        runId: job.data.runId,
        description: 'Extract the files in the combine archive',
        moreInfo: 'https://combinearchive.org',
        validator: 'https://run.biosimulations.org/utils/validate-project',
        help: `The files in the combine archive could not be extracted. Please ensure that the archive is a valid zip file.`,
        internalError: false,
        required: true,
      },
    };

    // Process the manifest and post the manifest to the API
    const filesJob = {
      name: 'Files',
      queueName: JobQueue.files,
      data: {
        runId: job.data.runId,
        description: 'Read the manifest and post the files to the API',
        moreInfo: undefined,
        validator: undefined,
        help: `There was an error uploading file metadata to the API. Please try again and contact us if the problem persists.`,
        required: true,
        internalError: true,
      },
      opts: {
        jobId: `${runId}`,
      },
      // Needs extraction completed and manifest completed
      children: [extractJob, manifestJob],
    };

    const thumbnailsProcessJob = {
      name: 'Create thumbnails',
      queueName: JobQueue.thumbnailProcess,
      data: {
        runId: job.data.runId,
        description:
          'Create thumbnails from the images specified in the manifest',
        moreInfo: undefined,
        validator: 'https://run.biosimulations.org/utils/validate-project',
        help: `There was an error creating thumbnails for the project. Please ensure that the images specified in the manifest are valid.`,
        required: false,
        internalError: false,
      },
      opts: {
        jobId: `${runId}`,
      },
      // Needs file processing completed
      children: [filesJob],
    };

    const postThumbnailsJob = {
      name: 'Post thumbnails',
      queueName: JobQueue.thumbnailPost,
      data: {
        runId: job.data.runId,
        description: 'Post thumbnails to the API',
        moreInfo: undefined,
        validator: undefined,
        help: `There was an error uploading thumbnails to the API. Please try again and contact us if the problem persists.`,
        required: false,
        internalError: true,
      },
      opts: {
        jobId: `${runId}`,
      },
      children: [thumbnailsProcessJob],
    };

    const sedmljob = {
      name: 'SED-ML',
      queueName: JobQueue.sedmlProcess,
      data: {
        runId: job.data.runId,
        description: 'Process the SED-ML file in the combine archive',
        moreInfo:
          'https://docs.biosimulations.org/concepts/conventions/simulation-experiments/',
        validator: 'https://run.biosimulations.org/utils/validate-simulation',
        help: 'There was an error in processing the simulation experiments in the SED-ML file',
        required: true,
        internalError: false,
      },
      opts: {
        jobId: `${runId}`,
        attempts: 10,
        backoff: {
          type: 'exponential',
          delay: 1000,
        },
      },
    };
    const postSedmlJob = {
      name: 'Post SED-ML',
      queueName: JobQueue.sedmlPost,
      data: {
        runId: job.data.runId,
        description: 'Post the SED-ML file to the API',
        moreInfo: undefined,
        validator: undefined,
        help: `There was an error uploading the SED-ML specifications to the API.`,
        required: true,
        internalError: true,
      },
      opts: {
        jobId: `${runId}`,
        attempts: 10,
        backoff: {
          type: 'exponential',
          delay: 1000,
        },
      },
      children: [sedmljob],
    };

    const outputsJob = {
      name: 'Output',
      queueName: JobQueue.output,
      data: {
        runId: job.data.runId,
        description: 'Process and upload the outputs of the simulation run',
        moreInfo: undefined,
        validator: undefined,
        help: `There was an error uploading the outputs to the API.`,
        required: true,
        internalError: true,
      },
      opts: {
        jobId: `${runId}`,
        attempts: 10,
        backoff: {
          type: 'exponential',
          delay: 1000,
        },
      },
    };

    const logsJob = {
      name: 'Logs',
      queueName: JobQueue.logs,
      data: {
        runId: job.data.runId,
        description: 'Retrieve the logs of the simulation run',
        moreInfo:
          'https://docs.biosimulations.org/concepts/conventions/simulation-run-logs/',
        validator: 'https://api.biosimulations.org',
        help: 'There was an error retrieving the logs of the simulation run',
        required: true,
        internalError: true,
      },
      opts: {
        jobId: `${runId}`,
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 1000,
        },
      },
    };
    const postLogsJob = {
      name: 'Post logs',
      queueName: JobQueue.logsPost,
      data: {
        runId: job.data.runId,
        description: 'Post the logs to the API',
        moreInfo: undefined,
        validator: undefined,
        help: `There was an error uploading the logs to the API.`,
        internalError: true,
        required: true,
      },
      opts: {
        jobId: `${runId}`,
        attempts: 10,
        backoff: {
          type: 'exponential',
          delay: 1000,
        },
      },
      children: [logsJob],
    };

    const metadataJob = {
      name: 'Metadata',
      queueName: JobQueue.metadata,
      data: {
        runId: job.data.runId,
        description: `Process the Metadata file in the combine archive`,
        moreInfo:
          'https://docs.biosimulations.org/concepts/conventions/simulation-project-metadata/',
        validator: 'https://run.biosimulations.org/utils/validate-metadata',
        help: 'There was an error in processing the metadata file',
        required: false,
        internalError: false,
      },
    };

    const postMetadataJob = {
      name: 'Post Metadata',
      queueName: JobQueue.metadataPost,
      data: {
        runId: job.data.runId,
        description: 'Post the Metadata file to the API',
        moreInfo: undefined,
        validator: undefined,
        help: `There was an error uploading the metadata to the API.`,
        required: false,
        internalError: true,
      },
      opts: {
        jobId: `${runId}`,
        attempts: 10,
        maxStalledCount: 3,
        lockDuration: 1000,
        backoff: {
          type: 'exponential',
          delay: 1000,
        },
      },
      children: [metadataJob],
    };

    const flow = await this.flowProducer.add({
      name: 'complete', // Final completion of the job
      queueName: JobQueue.complete, // add to the complete queue
      data: {
        runId: job.data.runId,
        status: job.data.status,
        statusReason: job.data.statusReason,
        projectId: job.data.projectId,
        projectOwner: job.data.projectOwner,
      },
      // Needs all the different steps completed before it can be completed
      children: [
        postThumbnailsJob,
        postSedmlJob,
        outputsJob,
        postLogsJob,
        postMetadataJob,
      ],
    });
  }
}