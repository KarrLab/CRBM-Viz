import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { FaqComponent } from './faq.component';
import { SharedUiModule } from '@biosimulations/shared/ui';
import { BiosimulationsIconsModule } from '@biosimulations/shared/icons';
import { SharedContentModule } from '@biosimulations/shared/content';
import { ScrollService } from '@biosimulations/shared/angular';
import { ConfigService } from '@biosimulations/config/angular';
import config from '../../../../assets/config.json';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

describe('FaqComponent', () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedUiModule,
        BiosimulationsIconsModule,
        SharedContentModule,
        NgxJsonLdModule,
      ],
      providers: [
        RouterTestingModule,
        { provide: ConfigService, useValue: config },
        ScrollService,
      ],
      declarations: [FaqComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
