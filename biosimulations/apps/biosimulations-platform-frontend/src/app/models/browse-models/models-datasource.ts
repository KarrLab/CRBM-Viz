import { MatTableDataSource } from '@angular/material/table';
import { Subscription, BehaviorSubject, Observable, merge, of } from 'rxjs';
import {
  BiomodelAttributes,
  OntologyTerm,
  UserId,
  Person,
} from '@biosimulations/datamodel/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { map, shareReplay, tap } from 'rxjs/operators';
import { ModelHttpService } from '../services/model-http.service';
import { Injectable } from '@angular/core';
import { ModelResource } from '@biosimulations/datamodel/api';
import { Author } from '../../shared/views/author';
import { Taxon } from '../../shared/views/taxon';
import { Format } from '../../shared/views/format';
import { Framework } from '../../shared/views/framework';

export interface ModelData {
  id: string;
  name: string;
  tags: string[];
  framework: OntologyTerm;
  format: Format;
  authors: Author[];
  owner: UserId;
  created: Date;
  updated: Date;
  taxon: Taxon | null;
  license: string;
}

@Injectable()
export class ModelDataSource extends MatTableDataSource<ModelData> {
  constructor(private modelHttp: ModelHttpService) {
    super();

    const newData = modelHttp
      .getAll()
      .pipe(
        map((value: ModelResource[]) =>
          value.map((model: ModelResource) => {
            return ModelDataSource.toDataModel(model);
          }),
        ),
      )
      .subscribe((value: ModelData[]) => (this.data = value));
    modelHttp
      .isLoading$()
      .subscribe((isLoading: boolean) => this.isLoading.next(isLoading));
  }
  paginator!: MatPaginator;
  sort!: MatSort;
  subscription?: Subscription;
  isLoading = new BehaviorSubject(true);
  static toDataModel(model: ModelResource): ModelData {
    const format = model.attributes.format;
    const modelData: ModelData = {
      id: model.id,
      name: model.attributes.metadata.name.replace('_', ' ').replace('-', ' '),
      tags: model.attributes.metadata.tags,
      framework: new Framework(model.attributes.framework),
      format: new Format(
        format.id,
        format.name,
        format.version,
        format.edamId,
        format.specUrl,
        format.url,
        format.mimetype,
        format.extension,
        format.sedUrn,
      ),
      authors: model.attributes.metadata.authors.map((person: Person) => {
        return new Author(person.firstName, person.lastName, person.middleName);
      }),
      owner: model.relationships.owner.data.id,
      created: new Date(model.meta.created),
      updated: new Date(model.meta.updated),
      taxon: model.attributes.taxon
        ? new Taxon(model.attributes.taxon?.id, model.attributes.taxon?.name)
        : null,
      license: model.attributes.metadata.license,
    };
    return modelData;
  }

  isLoading$() {
    return this.isLoading.asObservable();
  }
  refresh() {
    this.modelHttp.refresh();
  }
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
}
