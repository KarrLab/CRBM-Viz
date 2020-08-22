import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BiosimulationsNavigationComponent } from './biosimulations-navigation.component';
import { BreadCrumbsModule } from '../bread-crumbs/bread-crumbs.module';
import { TopbarComponent } from '../topbar/topbar.component';
import { LogoImageComponent } from '../logo-image/logo-image.component';
import { LogoTextComponent } from '../logo-text/logo-text.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PrivacyNoticeComponent } from '../privacy-notice/privacy-notice.component';
import { BiosimulationsIconsModule } from '@biosimulations/shared/icons';

describe('BiosimulationsNavigationComponent', () => {
  let component: BiosimulationsNavigationComponent;
  let fixture: ComponentFixture<BiosimulationsNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BiosimulationsNavigationComponent,
        TopbarComponent,
        LogoImageComponent,
        LogoTextComponent,
        PrivacyNoticeComponent,
      ],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        BreadCrumbsModule,
        RouterTestingModule,
        BiosimulationsIconsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiosimulationsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
