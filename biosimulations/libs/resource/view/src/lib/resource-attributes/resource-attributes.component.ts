import { Component, OnInit, Input } from '@angular/core';
import { biosimulationsIcon } from '@biosimulations/ui/icons';

interface View {
  display: string;
  icon: biosimulationsIcon | null;
  link: string | null;
  tooltip: string | null;
}
@Component({
  selector: 'biosimulations-resource-attributes',
  templateUrl: './resource-attributes.component.html',
  styleUrls: ['./resource-attributes.component.scss'],
})
export class ResourceAttributesComponent implements OnInit {
  @Input()
  list!: View[];

  constructor() {}

  ngOnInit(): void {}
}
