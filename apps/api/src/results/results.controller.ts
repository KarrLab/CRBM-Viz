/**
 * @file Provides the controller for HTTP API for the results of simulation runs.
 *  Get/Download operations are intended for end users.
 *  Post/Modification methods are intended for other services/admin/service users.
 * @author Bilal Shaikh
 * @copyright BioSimulations Team, 2020
 * @license MIT
 */

import {
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  Query,
  Res,
} from '@nestjs/common';

import {
  ApiQuery,
  ApiOkResponse,
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { ResultsService } from './results.service';
import {
  SimulationRunOutput,
  SimulationRunResults,
} from '@biosimulations/datamodel/api';
import { Response } from 'express';
import { ErrorResponseDocument } from '@biosimulations/datamodel/api';

@Controller('results')
@ApiTags('Results')
export class ResultsController {
  public constructor(private service: ResultsService) {}

  @ApiOperation({
    summary: 'Get the results of all of the outputs of a simulation run',
    description:
      'Get the results of each report and plot of each SED-ML file for the simulation run',
  })
  @Get(':runId')
  @ApiParam({
    name: 'runId',
    description: 'Id of a simulation run',
    required: true,
    type: String,
    schema: {
      pattern: '^[a-f\\d]{24}$',
    },
  })
  @ApiQuery({
    name: 'includeData',
    description:
      'Whether to include the simulation results or to only return the structure of the results (e.g., ids, names of the avaialable reports and data sets).',
    type: Boolean,
    required: false,
  })
  @ApiOkResponse({
    description: 'The simulation results were successfully retrieved',
    type: SimulationRunResults,
  })
  public async getResults(
    @Param('runId') runId: string,
    @Query('includeData', ParseBoolPipe) includeData = false,
  ): Promise<SimulationRunResults> {
    const results = await this.service.getResults(runId, includeData);

    const value: SimulationRunResults = {
      simId: results.simId,
      created: results.created,
      updated: results.updated,
      outputs: results.outputs,
    };

    return value;
  }

  @ApiOperation({
    summary: 'Download all of the outputs of a simulation run',
    description:
      'Download a zip file that contains each report (HDF5 format) and plot (PDF format) of each SED-ML file for the simulation run, as well as the log (YAML format) of the simulation run',
  })
  @Get(':runId/download')
  @ApiParam({
    name: 'runId',
    description: 'Id of a simulation run',
    required: true,
    type: String,
    schema: {
      pattern: '^[a-f\\d]{24}$',
    },
  })
  @ApiNotFoundResponse({
    type: ErrorResponseDocument,
    description: 'No output archive has the requested simulation run id',
  })
  @ApiOkResponse({
    description: 'The simulation results were successfully downloaded',
  })
  @ApiTags('Downloads')
  public async downloadResultReport(
    @Param('runId') runId: string,
    @Res({ passthrough: true }) res: Response,
  ): Promise<void> {
    const file = await this.service.download(runId);
    res.contentType('application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename="outputs.zip"');
    res.write(file);
    res.send();
  }

  @ApiOperation({
    summary:
      'Get the results of an output (plot or report) of a simulation run',
    description:
      'Get the results of a single output (SED-ML plot or report of a SED-ML file) of a simulation run',
  })
  @Get(':runId/:experimentLocationAndOutputId')
  @ApiParam({
    name: 'runId',
    description: 'Id of a simulation run',
    required: true,
    type: String,
    schema: {
      pattern: '^[a-f\\d]{24}$',
    },
  })
  @ApiParam({
    name: 'experimentLocationAndOutputId',
    description:
      'Forward slash-separated tuple of the location of the SED-ML file and the id of the SED-ML output (e.g., `path/to/simulation.sedml/Table1`)',
    required: true,
    type: String,
  })
  @ApiQuery({
    name: 'includeData',
    description:
      'Whether to include the simulation results or to only return the structure of the results (e.g., ids, names of the avaialable reports and data sets).',
    type: Boolean,
    required: false,
  })
  @ApiOkResponse({
    description: 'The simulation results were successfully retrieved',
    type: SimulationRunOutput,
  })
  public async getResultReport(
    @Param('runId') runId: string,
    @Param('experimentLocationAndOutputId')
    experimentLocationAndOutputId: string,
    @Query('includeData', ParseBoolPipe) includeData = false,
  ): Promise<SimulationRunOutput> {
    const value = await this.service.getOutput(
      runId,
      experimentLocationAndOutputId,
      includeData,
    );

    return value;
  }
}
