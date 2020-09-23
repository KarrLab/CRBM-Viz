import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { pluck, map, mergeAll, tap, catchError } from 'rxjs/operators';
import { Observable, of, BehaviorSubject, concat } from 'rxjs';

import {
  TocSection,
  TocSectionsContainerDirective,
  Column,
  ColumnLinkType,
  ColumnFilterType,
} from '@biosimulations/shared/ui';
import { SimulatorService } from '../simulator.service';

import edamJson from '../edam.json';
import kisaoJson from '../kisao.json';
import sboJson from '../sbo.json';
import spdxJson from '../spdx.json';
import { Simulator } from '@biosimulations/simulators/api-models';

const edamTerms = edamJson as {
  [id: string]: { name: string; description: string; url: string };
};
const kisaoTerms = kisaoJson as {
  [id: string]: { name: string; description: string; url: string };
};
const sboTerms = sboJson as {
  [id: string]: { name: string; description: string; url: string };
};
const spdxTerms = spdxJson as { [id: string]: { name: string; url: string } };

interface Algorithm {
  id: string;
  heading: string;
  name: string;
  description: DescriptionFragment[];
  url: string;
  frameworks: Framework[];
  formats: Format[];
  parameters: Observable<Parameter[]>;
  citations: Citation[];
}

enum DescriptionFragmentType {
  text = 'text',
  href = 'href',
}

interface DescriptionFragment {
  type: DescriptionFragmentType;
  value: string;
}

interface Framework {
  id: string;
  name: string;
  url: string;
}

interface Format {
  id: string;
  name: string;
  url: string;
}

interface Parameter {
  id?: string;
  name?: string;
  type: string;
  value: boolean | number | string;
  range: string | null;
  kisaoId: string;
  kisaoUrl: string;
}

interface Citation {
  url: string;
  text: string;
}

interface Version {
  label: string;
  date: string;
  image: string;
  url?: string;
}

@Component({
  selector: 'biosimulations-view-simulator',
  templateUrl: './view-simulator.component.html',
  styleUrls: ['./view-simulator.component.scss'],
})
export class ViewSimulatorComponent implements OnInit {
  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private service: SimulatorService
  ) {}

  loading$!: Observable<boolean>;
  // TODO handler errors from simulator service
  error = false;

  parameterColumns = ['id', 'name', 'type', 'value', 'range', 'kisaoId'];
  Columns = ['label', 'date', 'image'];

  id!: string;
  version!: string;
  name!: string;
  description!: string | null;
  image!: string;
  url!: string;
  licenseUrl!: string;
  licenseName!: string;
  authors!: string | null;
  citations!: Citation[];
  algorithms!: Algorithm[];
  private _versions = new BehaviorSubject<Version[]>([]);
  versions: Observable<Version[]> = this._versions.asObservable();

  parametersColumns: Column[] = [
    {
      id: 'id',
      heading: 'Id',
      key: 'id',
      showStacked: false,
    },
    {
      id: 'name',
      heading: 'Name',
      key: 'name',
      showStacked: false,
    },
    {
      id: 'type',
      heading: 'Type',
      key: 'type',
    },
    {
      id: 'value',
      heading: 'Default value',
      key: 'value',
    },
    {
      id: 'range',
      heading: 'Recommended range',
      key: 'range',
      minWidth: 163,
    },
    {
      id: 'kisaoId',
      heading: 'KiSAO id',
      key: 'kisaoId',
      rightIcon: 'link',
      rightLinkType: ColumnLinkType.href,
      rightHref: (parameter: Parameter): string => {
        return parameter.kisaoUrl;
      },
      showStacked: false,
      minWidth: 130,
    },
  ];

  getParameterStackedHeading(parameter: Parameter): string {
    const ids = [];
    if (parameter.id) {
      ids.push(parameter.id);
    }
    if (parameter.kisaoId) {
      ids.push(parameter.kisaoId);
    }

    const name = kisaoTerms[parameter.kisaoId].name;

    if (ids.length) {
      return kisaoTerms[parameter.kisaoId].name + ' (' + ids.join(', ') + ')';
    } else {
      return name;
    }
  }

  getParameterStackedHeadingMoreInfoRouterLink(
    parameter: Parameter
  ): string | null {
    if (parameter.kisaoUrl) {
      return parameter.kisaoUrl;
    } else {
      return null;
    }
  }

  versionsColumns: Column[] = [
    {
      id: 'label',
      heading: 'Version',
      key: 'label',
      rightIcon: 'internalLink',
      rightLinkType: ColumnLinkType.routerLink,
      rightRouterLink: (version: Version) => {
        return ['/simulators', this.id, version.label];
      },
      minWidth: 73,
      showStacked: false,
    },
    {
      id: 'date',
      heading: 'Date',
      key: 'date',
      filterType: ColumnFilterType.date,
      minWidth: 80,
    },
    {
      id: 'image',
      heading: 'Image',
      key: 'image',
      rightIcon: 'link',
      rightLinkType: ColumnLinkType.href,
      rightHref: (version: Version): string | null => {
        if (version.url === undefined) {
          return null;
        } else {
          return version.url;
        }
      },
      minWidth: 300,
    },
  ];

  getVersionStackedHeading(version: Version): string {
    return version.label;
  }

  getVersionStackedHeadingMoreInfoRouterLink(version: Version): string[] {
    return ['/simulators', this.route.snapshot.params['id'], version.label];
  }

  ngOnInit(): void {
    this.route.params.subscribe((value) => {
      const loadingSubject = new BehaviorSubject<boolean>(true);
      const id = value?.id;
      const version = value?.version;
      const loadSimulator: Observable<Simulator[]> = this.service.getAllById(
        id
      );
      loadSimulator.subscribe((simulators: Simulator[]) => {
        let simulator: Simulator;
        if (version) {
          const simulatorsFilter = simulators.filter(
            (sim: Simulator) => sim.version === version
          );
          if (simulatorsFilter.length > 0) {
            simulator = simulatorsFilter[0];
          } else {
            this.error = true;
            simulator = simulators[0];
          }
        } else {
          simulator = simulators[0];
        }

        loadingSubject.next(false);
        this.id = simulator.id;
        this.version = simulator.version;
        this.name = simulator.name;
        this.description = simulator.description;
        this.image = simulator.image;
        this.url = simulator.url;
        this.licenseUrl = spdxTerms[simulator?.license?.id]?.url;
        this.licenseName = spdxTerms[simulator?.license?.id]?.name
          .replace(/\bLicense\b/, '')
          .replace('  ', ' ');

        const authors = simulator?.authors?.map(
          (author: {
            lastName: string;
            middleName: string | null;
            firstName: string;
          }) => {
            let name = author.lastName;
            if (author.middleName) {
              name = author.middleName + ' ' + name;
            }
            if (author.firstName) {
              name = author.firstName + ' ' + name;
            }
            return name;
          }
        );
        switch (authors?.length) {
          case 0:
            this.authors = null;
            break;
          case 1:
            this.authors = authors[0];
            break;
          default:
            this.authors =
              authors.slice(0, -1).join(', ') +
              ' & ' +
              authors[authors.length - 1];
            break;
        }


        this.citations = simulator.references.citations.map(this.makeCitation);

        this.algorithms = simulator.algorithms.map(
          (algorithm: {
            kisaoId: { id: string };
            modelingFrameworks: any[];
            modelFormats: any[];
            parameters: any[];
            citations: any[] | undefined;
          }): Algorithm => {
            const parameters = new BehaviorSubject<Parameter[]>([]);
            parameters.next(
              algorithm.parameters.map(
                (parameter): Parameter => {
                  return {
                    id: parameter.id,
                    name: parameter.name,
                    type: parameter.type,
                    value: parameter.value,
                    range:
                      parameter.recommendedRange === undefined
                        ? null
                        : parameter.recommendedRange
                            .map((val: { toString: () => any }) => {
                              return val.toString();
                            })
                            .join(' - '),
                    kisaoId: parameter.kisaoId.id,
                    kisaoUrl:
                      'https://www.ebi.ac.uk/ols/ontologies/kisao/terms?iri=http%3A%2F%2Fwww.biomodels.net%2Fkisao%2FKISAO%23KISAO_' +
                      parameter.kisaoId.id,
                  };
                }
              )

            );

            return {
              id: algorithm.kisaoId?.id,
              heading:
                kisaoTerms[algorithm.kisaoId.id]?.name +
                ' (' +
                algorithm.kisaoId.id +
                ')',
              name: kisaoTerms[algorithm.kisaoId.id]?.name,
              description: this.formatKisaoDescription(
                kisaoTerms[algorithm.kisaoId.id]?.description
              ),
              url: kisaoTerms[algorithm.kisaoId.id]?.url,
              frameworks: algorithm.modelingFrameworks.map(
                (framework): Framework => {
                  return {
                    id: framework.id,
                    name: sboTerms[framework.id]?.name,
                    url: sboTerms[framework.id]?.url,
                  };
                }
              ),
              formats: algorithm.modelFormats.map(
                (format): Format => {
                  return {
                    id: format.id,
                    name: edamTerms[format.id].name,
                    url: edamTerms[format.id].url,
                  };
                }
              ),
              parameters: parameters.asObservable(),
              citations:
                algorithm.citations === undefined
                  ? []
                  : algorithm.citations.map(this.makeCitation),
            };
          }
        );

        const created = new Date(simulator.created);
        const versions = [];
        for (const simulatorVersion of simulators) {
          const version = {
            label: simulatorVersion.version,
            date:
              created.getFullYear().toString() +
              '-' +
              (created.getMonth() + 1).toString().padStart(2, '0') +
              '-' +
              created.getDate().toString().padStart(2, '0'),
            image: simulatorVersion.image,
            url: simulatorVersion.image,
          };
          versions.push(version);
        }

        versions.sort((a, b): number => {
          return (
            -1 * a.label.localeCompare(b.label, undefined, { numeric: true })
          );
        });
        this._versions.next(versions);

        this.loading$ = loadingSubject.asObservable();
      });
    });
  }

  formatKisaoDescription(value: string): DescriptionFragment[] {
    const formattedValue = [];
    let prevEnd = 0;

    const regExp = /\[(https?:\/\/.*?)\]/gi;
    let match;
    while ((match = regExp.exec(value)) !== null) {
      if (match.index > 0) {
        formattedValue.push({
          type: DescriptionFragmentType.text,
          value: value.substring(prevEnd, match.index),
        });
      }
      prevEnd = match.index + match[0].length;
      formattedValue.push({
        type: DescriptionFragmentType.href,
        value: match[1],
      });
    }
    if (prevEnd < value?.length) {
      formattedValue.push({
        type: DescriptionFragmentType.text,
        value: value.substring(prevEnd),
      });
    }
    return formattedValue;
  }

  makeCitation(citation: any): Citation {
    let text =
      citation.authors +
      '. ' +
      citation.title +
      '. <i>' +
      citation.journal +
      '</i>';
    if (citation.volume) {
      text += ' ' + citation.volume;
    }
    if (citation.issue) {
      text += ' (' + citation.issue + ')';
    }
    if (citation.pages) {
      text += ', ' + citation.pages;
    }
    text += ' (' + citation.year + ').';

    return {
      url: citation.identifiers[0].url as string,
      text: text,
    };
  }

  tocSections!: TocSection[];

  @ViewChild(TocSectionsContainerDirective)
  set tocSectionsContainer(container: TocSectionsContainerDirective) {
    setTimeout(() => {

      this.tocSections = container.getToc();

    });
  }

  copyDockerPullCmd(image = '{ image }'): void {
    const cmd = 'docker pull ' + image;
    navigator.clipboard.writeText(cmd);
  }
}
