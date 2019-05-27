import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionControlsComponent } from './question-controls.component';

describe('QuestionControlsComponent', () => {
  let component: QuestionControlsComponent;
  let fixture: ComponentFixture<QuestionControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
