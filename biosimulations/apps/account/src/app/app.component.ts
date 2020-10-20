import { Component, AfterViewInit } from '@angular/core';
import { ScrollService } from '@biosimulations/shared/services';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'biosimulations-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit(): void {
    this.scrollService.init();
  }
}
