import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioAComponent } from './no-debt.component';

describe('ScenarioAComponent', () => {
  let component: ScenarioAComponent;
  let fixture: ComponentFixture<ScenarioAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScenarioAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
