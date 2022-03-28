/**
 * BioSimulations COMBINE API
 * Endpoints for working with models (e.g., [CellML](https://cellml.org/), [SBML](http://sbml.org/)), simulation experiments (e.g., [Simulation Experiment Description Language (SED-ML)](https://sed-ml.org/)), metadata ([OMEX Metadata](https://sys-bio.github.io/libOmexMeta/)), and simulation projects ([COMBINE/OMEX archives](https://combinearchive.org/)).  Note, this API may change significantly in the future.
 *
 * The version of the OpenAPI document: 0.1
 * Contact: info@biosimulations.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
  HttpParameterCodec,
} from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

import { ValidationReport } from '../model/models';

import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  protected basePath = 'https://combine.api.biosimulations.dev';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  public encoder: HttpParameterCodec;

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration,
  ) {
    if (configuration) {
      this.configuration = configuration;
    }
    if (typeof this.configuration.basePath !== 'string') {
      if (typeof basePath !== 'string') {
        basePath = this.basePath;
      }
      this.configuration.basePath = basePath;
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  private addToHttpParams(
    httpParams: HttpParams,
    value: any,
    key?: string,
  ): HttpParams {
    if (typeof value === 'object' && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value);
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
    }
    return httpParams;
  }

  private addToHttpParamsRecursive(
    httpParams: HttpParams,
    value?: any,
    key?: string,
  ): HttpParams {
    if (value == null) {
      return httpParams;
    }

    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        (value as any[]).forEach(
          (elem) =>
            (httpParams = this.addToHttpParamsRecursive(httpParams, elem, key)),
        );
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(
            key,
            (value as Date).toISOString().substr(0, 10),
          );
        } else {
          throw Error('key may not be null if value is Date');
        }
      } else {
        Object.keys(value).forEach(
          (k) =>
            (httpParams = this.addToHttpParamsRecursive(
              httpParams,
              value[k],
              key != null ? `${key}.${k}` : k,
            )),
        );
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value);
    } else {
      throw Error('key may not be null if value is not object or array');
    }
    return httpParams;
  }

  /**
   * Validate a COMBINE/OMEX archive and the simulation experiments and models inside it.
   * Validate a COMBINE/OMEX archive and the simulation experiments (SED-ML files) and models (e.g., SBML files) inside it.  Notes: * An OMEX Manifest file is required to validate OMEX Metadata files. As a result, the &#x60;validateOmexManifest&#x3D;false&#x60; option should often also be used with the &#x60;validateOmexMetadata&#x3D;false&#x60; option. * Currently, submission to BioSimulations requires metadata to be in RDF-XML format. * COMBINE/OMEX archives must pass all validation checks for publication to BioSimulations.
   * @param omexMetadataFormat OMEX Metadata format
   * @param omexMetadataSchema OMEX Metadata schema
   * @param file The two files uploaded in creating a combine archive
   * @param url URL
   * @param validateOmexManifest Whether to validate the manifest of the archive.  Default: &#x60;true&#x60;.
   * @param validateSedml Whether to validate the SED-ML files in the archive.  Default: &#x60;true&#x60;.
   * @param validateSedmlModels Whether to validate the source (e.g., CellML, SBML file) of each model of each SED-ML file in the archive.  Default: &#x60;true&#x60;.
   * @param validateOmexMetadata Whether to validate the OMEX Metadata files in the archive according to [BioSimulators\\\&#39; conventions](https://docs.biosimulations.org/concepts/conventions/simulation-project-metadata/).  Default: &#x60;true&#x60;.
   * @param validateImages Whether to validate the image (BMP, GIF, PNG, JPEG, TIFF, WEBP) files in the archive.  Default: &#x60;true&#x60;.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public srcHandlersCombineValidateHandler(
    omexMetadataFormat: string,
    omexMetadataSchema: string,
    file?: Blob,
    url?: string,
    validateOmexManifest?: boolean,
    validateSedml?: boolean,
    validateSedmlModels?: boolean,
    validateOmexMetadata?: boolean,
    validateImages?: boolean,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' },
  ): Observable<ValidationReport>;
  public srcHandlersCombineValidateHandler(
    omexMetadataFormat: string,
    omexMetadataSchema: string,
    file?: Blob,
    url?: string,
    validateOmexManifest?: boolean,
    validateSedml?: boolean,
    validateSedmlModels?: boolean,
    validateOmexMetadata?: boolean,
    validateImages?: boolean,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' },
  ): Observable<HttpResponse<ValidationReport>>;
  public srcHandlersCombineValidateHandler(
    omexMetadataFormat: string,
    omexMetadataSchema: string,
    file?: Blob,
    url?: string,
    validateOmexManifest?: boolean,
    validateSedml?: boolean,
    validateSedmlModels?: boolean,
    validateOmexMetadata?: boolean,
    validateImages?: boolean,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' },
  ): Observable<HttpEvent<ValidationReport>>;
  public srcHandlersCombineValidateHandler(
    omexMetadataFormat: string,
    omexMetadataSchema: string,
    file?: Blob,
    url?: string,
    validateOmexManifest?: boolean,
    validateSedml?: boolean,
    validateSedmlModels?: boolean,
    validateOmexMetadata?: boolean,
    validateImages?: boolean,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' },
  ): Observable<any> {
    if (omexMetadataFormat === null || omexMetadataFormat === undefined) {
      throw new Error(
        'Required parameter omexMetadataFormat was null or undefined when calling srcHandlersCombineValidateHandler.',
      );
    }
    if (omexMetadataSchema === null || omexMetadataSchema === undefined) {
      throw new Error(
        'Required parameter omexMetadataSchema was null or undefined when calling srcHandlersCombineValidateHandler.',
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected,
      );
    }

    // to determine the Content-Type header
    const consumes: string[] = ['multipart/form-data'];

    const canConsumeForm = this.canConsumeForm(consumes);

    let localVarFormParams: { append(param: string, value: any): any };
    const localVarUseForm = false;
    const localVarConvertFormParamsToString = false;
    if (localVarUseForm) {
      localVarFormParams = new FormData();
    } else {
      localVarFormParams = new HttpParams({ encoder: this.encoder });
    }

    let responseType_: 'text' | 'json' = 'json';
    if (
      localVarHttpHeaderAcceptSelected &&
      localVarHttpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text';
    }

    return this.httpClient.post<ValidationReport>(
      `${this.configuration.basePath}/combine/validate`,
      localVarConvertFormParamsToString
        ? localVarFormParams.toString()
        : localVarFormParams,
      {
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      },
    );
  }

  /**
   * Validate a model
   * Validate a model file such as a [CellML](https://cellml.org) or [Systems Biology Markup Language (SBML)](http://sbml.org) file.  Note, this endpoint is limited to models that are can be captured by a single file. Models that are described via multiple files can be validated using the COMBINE/OMEX archive validation endpoint (&#x60;/combine/validate&#x60;).
   * @param language Language of the model
   * @param file The two files uploaded in creating a combine archive
   * @param url URL
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public srcHandlersModelValidateHandler(
    language: string,
    file?: Blob,
    url?: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' },
  ): Observable<ValidationReport>;
  public srcHandlersModelValidateHandler(
    language: string,
    file?: Blob,
    url?: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' },
  ): Observable<HttpResponse<ValidationReport>>;
  public srcHandlersModelValidateHandler(
    language: string,
    file?: Blob,
    url?: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' },
  ): Observable<HttpEvent<ValidationReport>>;
  public srcHandlersModelValidateHandler(
    language: string,
    file?: Blob,
    url?: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' },
  ): Observable<any> {
    if (language === null || language === undefined) {
      throw new Error(
        'Required parameter language was null or undefined when calling srcHandlersModelValidateHandler.',
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected,
      );
    }

    // to determine the Content-Type header
    const consumes: string[] = ['multipart/form-data'];

    const canConsumeForm = this.canConsumeForm(consumes);

    let localVarFormParams: { append(param: string, value: any): any };
    const localVarUseForm = false;
    const localVarConvertFormParamsToString = false;
    if (localVarUseForm) {
      localVarFormParams = new FormData();
    } else {
      localVarFormParams = new HttpParams({ encoder: this.encoder });
    }

    let responseType_: 'text' | 'json' = 'json';
    if (
      localVarHttpHeaderAcceptSelected &&
      localVarHttpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text';
    }

    return this.httpClient.post<ValidationReport>(
      `${this.configuration.basePath}/model/validate`,
      localVarConvertFormParamsToString
        ? localVarFormParams.toString()
        : localVarFormParams,
      {
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      },
    );
  }

  /**
   * Validate metadata about a simulation project or a component of a simulation project
   * Validate an [OMEX Metadata](https://sys-bio.github.io/libOmexMeta/) file with metadata about a simulation project or a component of a simulation project.  Notes * Thumbnails described in OMEX Metadata files cannot be validated without the source images. As a result, such metadata files must be validated as part of the validation of COMBINE/OMEX archives (&#x60;/combine/validate&#x60;) which include the thumbnail files. * Currently, submission to BioSimulations requires metadata to be in RDF-XML format.
   * @param format Format of the document
   * @param schema Schema for validating OMEX Metadata files. The RDF schema, allows all semantic triples. The [BioSimulations schema](https://docs.biosimulations.org/concepts/conventions/simulation-project-metadata/) imposes additional requirements for minimal metadata about simulation projects. The BioSimulations schema is required for publishing projects to BioSimulations.
   * @param file The two files uploaded in creating a combine archive
   * @param url URL
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public srcHandlersOmexMetadataValidateHandler(
    format: string,
    schema: string,
    file?: Blob,
    url?: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' },
  ): Observable<ValidationReport>;
  public srcHandlersOmexMetadataValidateHandler(
    format: string,
    schema: string,
    file?: Blob,
    url?: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' },
  ): Observable<HttpResponse<ValidationReport>>;
  public srcHandlersOmexMetadataValidateHandler(
    format: string,
    schema: string,
    file?: Blob,
    url?: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' },
  ): Observable<HttpEvent<ValidationReport>>;
  public srcHandlersOmexMetadataValidateHandler(
    format: string,
    schema: string,
    file?: Blob,
    url?: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' },
  ): Observable<any> {
    if (format === null || format === undefined) {
      throw new Error(
        'Required parameter format was null or undefined when calling srcHandlersOmexMetadataValidateHandler.',
      );
    }
    if (schema === null || schema === undefined) {
      throw new Error(
        'Required parameter schema was null or undefined when calling srcHandlersOmexMetadataValidateHandler.',
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected,
      );
    }

    // to determine the Content-Type header
    const consumes: string[] = ['multipart/form-data'];

    const canConsumeForm = this.canConsumeForm(consumes);

    let localVarFormParams: { append(param: string, value: any): any };
    const localVarUseForm = false;
    const localVarConvertFormParamsToString = false;
    if (localVarUseForm) {
      localVarFormParams = new FormData();
    } else {
      localVarFormParams = new HttpParams({ encoder: this.encoder });
    }

    let responseType_: 'text' | 'json' = 'json';
    if (
      localVarHttpHeaderAcceptSelected &&
      localVarHttpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text';
    }

    return this.httpClient.post<ValidationReport>(
      `${this.configuration.basePath}/omex-metadata/validate`,
      localVarConvertFormParamsToString
        ? localVarFormParams.toString()
        : localVarFormParams,
      {
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      },
    );
  }

  /**
   * Validate a SED-ML file
   * Validate a [Simulation Experiment Description Markup Language (SED-ML)](https://sed-ml.org/) file. Note, this method does not validate the sources of the models of SED-ML files or targets to models. Models files are required for more comprehensive validation. The &#x60;/combine/validate&#x60; endpoint provides more comprehensive validation that encompasses validation of model sources and targets to models.
   * @param file The two files uploaded in creating a combine archive
   * @param url URL
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public srcHandlersSedMlValidateHandler(
    file?: Blob,
    url?: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' },
  ): Observable<ValidationReport>;
  public srcHandlersSedMlValidateHandler(
    file?: Blob,
    url?: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' },
  ): Observable<HttpResponse<ValidationReport>>;
  public srcHandlersSedMlValidateHandler(
    file?: Blob,
    url?: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' },
  ): Observable<HttpEvent<ValidationReport>>;
  public srcHandlersSedMlValidateHandler(
    file?: Blob,
    url?: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' },
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected,
      );
    }

    // to determine the Content-Type header
    const consumes: string[] = ['multipart/form-data'];

    const canConsumeForm = this.canConsumeForm(consumes);

    let localVarFormParams: { append(param: string, value: any): any };
    const localVarUseForm = false;
    const localVarConvertFormParamsToString = false;
    if (localVarUseForm) {
      localVarFormParams = new FormData();
    } else {
      localVarFormParams = new HttpParams({ encoder: this.encoder });
    }

    let responseType_: 'text' | 'json' = 'json';
    if (
      localVarHttpHeaderAcceptSelected &&
      localVarHttpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType_ = 'text';
    }

    return this.httpClient.post<ValidationReport>(
      `${this.configuration.basePath}/sed-ml/validate`,
      localVarConvertFormParamsToString
        ? localVarFormParams.toString()
        : localVarFormParams,
      {
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      },
    );
  }
}