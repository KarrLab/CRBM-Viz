import { Component, Input, ChangeDetectionStrategy, ContentChildren, QueryList } from '@angular/core';
import { BiosimulationsNavigationSubitemComponent } from './biosimulations-navigation-subitem.component';

@Component({
  selector: 'biosimulations-navigation-item',
  templateUrl: './biosimulations-navigation-item.component.html',
  styleUrls: ['./biosimulations-navigation-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BiosimulationsNavigationItemComponent {
  @Input()
  heading = '';

  @Input()
  icon = '';

  @Input()
  route = '';

  @Input()
  aboveDivider = false;

  noExpansion = false;

  @ContentChildren(BiosimulationsNavigationSubitemComponent)
  set subitems(subitems: QueryList<BiosimulationsNavigationSubitemComponent>) {
    this.noExpansion = subitems.length === 0;
  }

  @Input()
  disabled = false;

  constructor() {}
}
