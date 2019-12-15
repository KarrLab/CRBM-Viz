import { Component, Input, OnInit } from '@angular/core';
import { GridComponent } from '../grid/grid.component';
import { VisualizationService } from 'src/app/Shared/Services/visualization.service';
import { UtilsService } from 'src/app/Shared/Services/utils.service';
import { Visualization } from 'src/app/Shared/Models/visualization';
import { User } from 'src/app/Shared/Models/user';

@Component({
  selector: 'app-visualizations-grid',
  templateUrl: './visualizations-grid.component.html',
  styleUrls: ['./visualizations-grid.component.sass'],
})
export class VisualizationsGridComponent implements OnInit {
  @Input() showOwner = true;
  @Input() showStatus = false;

  columnDefs;
  rowData;

  private _owner: string;

  @Input()
  set owner(value: string) {
    this._owner = value;
    this.rowData = this.visualizationService.list(null, value);
  }

  @Input() inTab = false;

  constructor(
    private visualizationService: VisualizationService
    ) {
  }

  ngOnInit() {
    this.columnDefs = [
      {
        headerName: 'Id',
        field: 'id',
        cellRenderer: 'idRenderer',
        minWidth: 52,
        width: 60,
        maxWidth: 70,
        suppressSizeToFit: true,
      },
      {
        headerName: 'Name',
        field: 'name',
        minWidth: 150,
      },

      {
        headerName: 'Tags',
        field: 'tags',
        filter: 'agSetColumnFilter',
        valueGetter: tagsGetter,
        filterValueGetter: tagsGetter,
        valueFormatter: setFormatter,
        minWidth: 150,
        hide: true,
      },
      {
        headerName: 'Parent',
        field: 'parent.name',
        minWidth: 150,
        hide: true,
      },
      {
        headerName: 'Authors',
        field: 'refs',
        valueGetter: authorGetter,
        filterValueGetter: authorGetter,
        valueFormatter: authorFormatter,
        minWidth: 150,
        hide: true,
      },
      {
        headerName: 'Owner',
        field: 'owner',
        valueGetter: ownerGetter,
        minWidth: 150,
        hide: !this.showOwner,
      },
      {
        headerName: 'Access',
        field: 'access',
        filter: 'agSetColumnFilter',
        valueFormatter: capitalizeFormatter,
        minWidth: 75,
        hide: true,
      },
      {
        headerName: 'License',
        field: 'license.name',
        filter: 'agSetColumnFilter',
        minWidth: 75,
        hide: true,
      },

      {
        headerName: 'Created',
        field: 'created',
        valueFormatter: dateFormatter,
        filter: 'agDateColumnFilter',
        minWidth: 100,
        hide: true,
      },
      {
        headerName: 'Updated',
        field: 'updated',
        valueFormatter: dateFormatter,
        filter: 'agDateColumnFilter',
        minWidth: 100,
        hide: true,
      },
    ];

    this.rowData = this.visualizationService.list(null, this._owner);
  }

  timeFormatter(params): string {
    const secs:number = params.value;
    return UtilsService.formatTimeForHumans(secs);
  }
}

function tagsGetter(params): string[] {
  return params.data.tags;
}

function taxonGetter(params): string {
  return params.data.model.taxon.getShortName();
}

function setFormatter(params) {
  const value = params.value;
  return value.join(', ');
}

function ownerGetter(params): string {
  const owner:User = params.data.owner;
  return owner.getFullName();
}

function capitalizeFormatter(params): string {
  const value:string = params.value;
  return value.substring(0, 1).toUpperCase() + value.substring(1);
}

function authorGetter(params): string[] {
  return params.data.getAuthors().map(author => author.getFullName());
}

function authorFormatter(params) {
  const value = params.value;
  return UtilsService.joinAuthorNames(value);
}

function dateFormatter(params): string {
  const date:Date = params.value;
  return (date.getFullYear()
     + '-' + String(date.getMonth() + 1).padStart(2, '0')
     + '-' + String(date.getDate()).padStart(2, '0'));
}
