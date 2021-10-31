import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  Logger,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import {
  ErrorObject,
  ErrorResponseDocument,
} from '@biosimulations/datamodel/api';
import { BiosimulationsException } from '@biosimulations/shared/exceptions';

@Catch(BiosimulationsException)
export class BiosimulationsExceptionFilter implements ExceptionFilter {
  private logger = new Logger(BiosimulationsExceptionFilter.name);
  public catch(exception: BiosimulationsException, host: ArgumentsHost): void {
    this.logger.error(exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let resbody: ErrorObject = {};

    status = exception.getStatus();
    resbody = exception.getError();
    resbody.meta = resbody.meta || {};
    (resbody.meta['time'] = Date.now()), (resbody.meta['url'] = request.url);

    const responseError: ErrorResponseDocument = { error: [resbody] };
    this.logger.log(responseError);
    response.status(status).json(responseError);
  }
}
