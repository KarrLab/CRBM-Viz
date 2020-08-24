import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPageTocItemComponent } from './text-page-toc-item.component';

describe('TextPageTocItemComponent', () => {
  let component: TextPageTocItemComponent;
  let fixture: ComponentFixture<TextPageTocItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextPageTocItemComponent],
      imports: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextPageTocItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
