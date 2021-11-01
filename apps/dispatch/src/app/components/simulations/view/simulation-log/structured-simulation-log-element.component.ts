import { Component, Input } from '@angular/core';
import {
  SedDocumentLog,
  SedTaskLog,
  SedReportLog,
  SedPlot2DLog,
  SedPlot3DLog,
  SimulatorDetail,
  AlgorithmKisaoDescriptionFragment,
  CombineArchiveLog,
} from '../../../../simulation-logs-datamodel';
import * as Anser from 'anser';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { OntologyService } from '@biosimulations/ontology/client';
import { StructuredSimulationLogElementService } from './structured-simulation-log-element.service';
import {
  KisaoTerm,
  SimulationRunLogStatus,
} from '@biosimulations/datamodel/common';
import { IconActionType } from '@biosimulations/shared/ui';

type logTypes =
  | SedDocumentLog
  | SedTaskLog
  | SedReportLog
  | SedPlot2DLog
  | SedPlot3DLog
  | CombineArchiveLog;

interface FormattedSimulatorDetail {
  key: string;
  value: string;
}

@Component({
  selector: 'biosimulations-structured-simulation-log-element',
  templateUrl: './structured-simulation-log-element.component.html',
  styleUrls: ['./structured-simulation-log-element.component.scss'],
})
export class StructuredSimulationLogElementComponent {
  constructor(
    private sanitizer: DomSanitizer,
    private ontologyService: OntologyService,
    private structuredLogService: StructuredSimulationLogElementService,
  ) {}

  @Input()
  isStructuredLog = true;

  @Input()
  elementId!: string;

  @Input()
  elementType!: string;

  heading!: string;

  private _log!: logTypes;

  noOutputMessage = '';
  formattedOutput!: SafeHtml | undefined;

  algorithmKisaoTerm: Observable<KisaoTerm> | undefined;
  algorithmKisaoTermDescription:
    | Observable<AlgorithmKisaoDescriptionFragment[] | undefined>
    | undefined;
  formattedSimulatorDetails: FormattedSimulatorDetail[] | undefined;

  @Input()
  set log(value: logTypes) {
    this._log = value;
    this.heading = this.getHeading();

    switch (value.status) {
      case SimulationRunLogStatus.QUEUED: {
        const elementType = this.elementType.substring(0, 1).toLowerCase() + this.elementType.substring(1);
        this.noOutputMessage = `Output will be available once the ${elementType} completes.`;
        break;
      }
      case SimulationRunLogStatus.RUNNING:
        this.noOutputMessage = 'Output is not yet available.';
        break;
      default:
        this.noOutputMessage = 'No output was produced.';
        break;
    }

    this.formattedOutput = value?.output
      ? this.sanitizer.bypassSecurityTrustHtml(Anser.ansiToHtml(value.output))
      : undefined;

    if ('algorithm' in value && value.algorithm) {
      this.algorithmKisaoTerm = this.ontologyService.getKisaoTerm(
        value.algorithm,
      );
      this.algorithmKisaoTermDescription = this.algorithmKisaoTerm.pipe(
        pluck('description'),
        map(this.structuredLogService.formatKisaoDescription),
      );
    } else {
      this.algorithmKisaoTerm = undefined;
      this.algorithmKisaoTermDescription = undefined;
    }

    if ('simulatorDetails' in value && value?.simulatorDetails?.length) {
      this.formattedSimulatorDetails = value.simulatorDetails.map(
        (keyValue: SimulatorDetail): FormattedSimulatorDetail => {
          const key = keyValue.key;
          const value = keyValue?.value || '';
          return {
            key: key,
            value:
              typeof value === 'object'
                ? JSON.stringify(value, null, 2)
                : value.toString(),
          };
        },
      );
    }
  }

  get log(): logTypes {
    return this._log;
  }

  getHeading(): string {
    const duration = this.log?.duration;

    return (
      this.elementType +
      (this.elementId ? ' ' + this.elementId : '') +
      ' ' +
      '(' +
      this.log.status.toLowerCase() +
      (typeof duration === 'number' ? ', ' + duration.toFixed(1) + ' s' : '') +
      ')'
    );
  }

  @Input()
  compact = false;

  @Input()
  iconActionType: IconActionType = 'scrollToTop';

  @Input()
  first = false;

  @Input()
  last = false;
}
