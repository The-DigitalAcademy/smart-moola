import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongAnswersComponent } from './wrong-answers.component';

describe('WrongAnswersComponent', () => {
  let component: WrongAnswersComponent;
  let fixture: ComponentFixture<WrongAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongAnswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrongAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
