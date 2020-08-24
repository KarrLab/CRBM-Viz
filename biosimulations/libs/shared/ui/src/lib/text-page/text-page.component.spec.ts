import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComponent } from '../page/page.component';
import { TextPageComponent } from './text-page.component';
import { TextPageSectionComponent } from './text-page-section.component';
import { TextPageSideBarSectionComponent } from './text-page-side-bar-section.component';
import { TextPageTocItemComponent } from './text-page-toc-item.component';
import { BiosimulationsIconsModule } from '@biosimulations/shared/icons';

describe('TextPageComponent', () => {
  let component: TextPageComponent;
  let fixture: ComponentFixture<TextPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageComponent, TextPageComponent, TextPageSectionComponent, TextPageSideBarSectionComponent, TextPageTocItemComponent],
      imports: [BiosimulationsIconsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
