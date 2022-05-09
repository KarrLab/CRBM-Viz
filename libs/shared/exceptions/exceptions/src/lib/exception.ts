import { AboutLinksObject, ErrorObject, ErrorSourceObject } from '@biosimulations/datamodel/api';
import { HttpException } from '@nestjs/common';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

// TODO refactor to be able to hold multiple errors
export class BiosimulationsException extends Error {
  private errorObject: ErrorObject;
  constructor(
    private status: number,
    private title: string,
    private detail?: string,
    private code?: string,
    private link?: string,
    private sourcePointer?: string,
    private sourceParameter?: string,
    private meta?: { [key: string]: any },
  ) {
    super(title);
    this.name = 'BiosimulationsError';
    //this.initFields();
    this.errorObject = this.createError();
  }

  createError(): ErrorObject {
    const statusCode = StatusCodes?.[this.status] as keyof typeof ReasonPhrases | undefined;
    const title = statusCode === undefined ? this.title : ReasonPhrases?.[statusCode] || this.title;

    const error: ErrorObject = {
      status: this.status.toString(),
      title: title,
    };

    if (this.detail) {
      error.detail = `${this.title}: ${this.detail}`;
    } else {
      error.detail = this.title;
    }

    if (this.code) {
      error.code = this.code;
    }

    if (this.link) {
      const linkObject: AboutLinksObject = {
        about: this.link,
      };
      error.links = linkObject;
    }

    if (this.sourceParameter || this.sourcePointer) {
      const source: ErrorSourceObject = {};
      if (this.sourcePointer) {
        source.pointer = this.sourcePointer;
      }
      if (this.sourceParameter) {
        source.parameter = this.sourceParameter;
      }
      error.source = source;
    }

    if (this.meta) {
      error.meta = this.meta;
    }
    return error;
  }

  getStatus(): number {
    return this.status;
  }

  getError(): ErrorObject {
    return this.errorObject;
  }
}

export function isBiosimulationsException(
  exception: BiosimulationsException | HttpException,
): exception is BiosimulationsException {
  return (
    (exception as BiosimulationsException).getError !== undefined &&
    (exception as BiosimulationsException).getStatus !== undefined
  );
}
