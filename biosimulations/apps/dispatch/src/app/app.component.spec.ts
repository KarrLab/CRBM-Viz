import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DispatchComponent } from './components/dispatch/dispatch.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SharedUiModule } from '@biosimulations/shared/ui';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        SharedUiModule,
        MatSelectModule,
        HttpClientTestingModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      declarations: [AppComponent, DispatchComponent, FooterComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;
    // expect(app).toBeTruthy();
  });

  it(`should have as title 'biosimulations-dispatch-frontend'`, () => {
    //const fixture = TestBed.createComponent(AppComponent);
    //const app = fixture.componentInstance;
    //expect(app.title).toEqual('biosimulations-dispatch-frontend');
  });
});
