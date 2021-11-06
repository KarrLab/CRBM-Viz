import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScrollService } from '@biosimulations/shared/angular';
import { ConfigService } from '@biosimulations/config/angular';
import { HealthService } from './services/health/health.service';
import { UpdateService } from '@biosimulations/shared/pwa';
import { Observable } from 'rxjs';

@Component({
  selector: 'biosimulations-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'simulators';

  healthy$!: Observable<boolean>;

  constructor(
    public config: ConfigService,
    private scrollService: ScrollService,
    private updateService: UpdateService,
    private healthService: HealthService,
  ) {}

  ngOnInit(): void {
    this.healthy$ = this.healthService.isHealthy();
  }

  ngAfterViewInit(): void {
    this.scrollService.init();
  }
}
