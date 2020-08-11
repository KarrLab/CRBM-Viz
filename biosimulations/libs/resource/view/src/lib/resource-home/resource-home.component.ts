import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biosimulations-resource-home',
  templateUrl: './resource-home.component.html',
  styleUrls: ['./resource-home.component.scss'],
})
export class ResourceHomeComponent implements OnInit {
  @Input()
  name = '';

  @Input()
  pluralName = '';

  @Input()
  shortName = '';

  @Input()
  pluralShortName = '';

  @Input()
  imageUrl = '';

  constructor() {}

  ngOnInit(): void { }
}
