import { Component, Input } from '@angular/core';

@Component({
  selector: 'biosimulations-full-page-spinner',
  templateUrl: './full-page-spinner.component.html',
  styleUrls: ['./full-page-spinner.component.scss'],
})
export class FullPageSpinnerComponent {
  @Input()
  containerHasBreadcrumbs = true;

  @Input()
  containerHasTabs = false;

  @Input()
  containerHasPadding = false;

  @Input()
  label?: string;

  @Input()
  public messages: string[] = ['']; // Array of messages to display

  @Input()
  public intervalDuration: number = 3000; // Duration for each message in milliseconds
}
