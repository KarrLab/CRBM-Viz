import {
  AboutLinksObject,
  ErrorObject,
  ErrorResponseDocument,
  MetaObject,
} from '@biosimulations/shared/datamodel-api';
import { HttpException, HttpStatus } from '@nestjs/common';
import { exception } from 'console';

export const makeErrorObject = (
  status: HttpStatus,
  title: string,
  detail: string,
  id?: string,
  link?: string,
  code?: string,
  pointer?: string,
  parameter?: string,
  meta?: { [key: string]: any }
) => {
  const errorObj: ErrorObject = {
    id: id,

    links: link ? { about: link } : undefined,

    status: status.toString(),

    code: code,

    title: title,

    detail: detail,

    source:
      pointer || parameter
        ? { pointer: pointer, parameter: parameter }
        : undefined,
    meta: meta,
  };
  return errorObj;
};

export const makeErrorObjectFromHttp = (exception: HttpException) => {
  let resp = exception.getResponse();
  if (typeof resp !== 'string') {
    resp = (resp as any)?.error as string;
  }
  return makeErrorObject(exception.getStatus(), resp, exception.message);
};
