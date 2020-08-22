import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsComponent } from './models.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ResourceViewModule } from '@biosimulations/platform/view';
import { BiosimulationsIconsModule } from '@biosimulations/shared/icons';

describe('ModelsComponent', () => {
  let component: ModelsComponent;
  let fixture: ComponentFixture<ModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ResourceViewModule,
        BiosimulationsIconsModule,
      ],
      declarations: [ModelsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
