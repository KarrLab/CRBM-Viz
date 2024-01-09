/**
 * simdata-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { DatasetData } from '../model/datasetData';
import { HTTPValidationError } from '../model/hTTPValidationError';
import { Configuration } from '../configuration';

@Injectable()
export class DefaultService {
  protected basePath = 'http://localhost';
  public defaultHeaders: Record<string, string> = {};
  public configuration = new Configuration();

  constructor(protected httpClient: HttpService, @Optional() configuration: Configuration) {
    this.configuration = configuration || this.configuration;
    this.basePath = configuration?.basePath || this.basePath;
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    return consumes.includes(form);
  }

  /**
   * Health
   *
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public healthHealthGet(): Observable<AxiosResponse<any>>;
  public healthHealthGet(): Observable<any> {
    let headers = { ...this.defaultHeaders };

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<any>(`${this.basePath}/health`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
    });
  }
  /**
   * Read Dataset
   *
   * @param runId
   * @param datasetName
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public readDatasetDatasetsRunIdGet(runId: any, datasetName: any): Observable<AxiosResponse<DatasetData>>;
  public readDatasetDatasetsRunIdGet(runId: any, datasetName: any): Observable<any> {
    if (runId === null || runId === undefined) {
      throw new Error('Required parameter runId was null or undefined when calling readDatasetDatasetsRunIdGet.');
    }

    if (datasetName === null || datasetName === undefined) {
      throw new Error('Required parameter datasetName was null or undefined when calling readDatasetDatasetsRunIdGet.');
    }

    let queryParameters = new URLSearchParams();
    if (datasetName !== undefined && datasetName !== null) {
      queryParameters.append('dataset_name', <any>datasetName);
    }

    let headers = { ...this.defaultHeaders };

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<DatasetData>(`${this.basePath}/datasets/${encodeURIComponent(String(run_id))}`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
    });
  }
  /**
   * Root
   *
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public rootGet(): Observable<AxiosResponse<any>>;
  public rootGet(): Observable<any> {
    let headers = { ...this.defaultHeaders };

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<any>(`${this.basePath}/`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
    });
  }
}