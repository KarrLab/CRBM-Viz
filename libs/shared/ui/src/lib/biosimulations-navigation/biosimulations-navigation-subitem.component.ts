import { Component, Input } from '@angular/core';
import { BiosimulationsIcon } from '@biosimulations/shared/icons';

@Component({
  selector: 'biosimulations-navigation-subitem',
  templateUrl: './biosimulations-navigation-subitem.component.html',
  styleUrls: ['./biosimulations-navigation-subitem.component.scss'],
})
export class BiosimulationsNavigationSubitemComponent {
  @Input()
  heading = '';

  @Input()
  icon!: BiosimulationsIcon;

  @Input()
  route: string | string[] = '';

  @Input()
  queryParams: { [key: string]: string } = {};

  @Input()
  href?: string;

  @Input()
  disabled = false;
}
