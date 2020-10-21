import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import {
  ErrorObject,
  ErrorResponseDocument,
} from '@biosimulations/shared/datamodel-api';
import {
  BiosimulationsException,
  isBiosimulationsException,
} from './exception';

@Catch(BiosimulationsException)
export class BiosimulationsExceptionFilter implements ExceptionFilter {
  catch(exception: BiosimulationsException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = 500;
    let resbody: ErrorObject = {};

    status = exception.getStatus();
    resbody = exception.getError();

    resbody.meta = {
      time: Date.now(),
      url: request.url,
    };
    const responseError: ErrorResponseDocument = { error: [resbody] };
    response.status(status).json(responseError);
  }
}
