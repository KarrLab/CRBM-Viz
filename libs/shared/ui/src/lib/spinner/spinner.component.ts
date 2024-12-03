import { Component, Input } from '@angular/core';

@Component({
  selector: 'biosimulations-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @Input()
  public label?: string;
}
