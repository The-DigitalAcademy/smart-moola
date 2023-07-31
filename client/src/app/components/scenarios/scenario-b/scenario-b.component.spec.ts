import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioBComponent } from './scenario-b.component';

describe('ScenarioBComponent', () => {
  let component: ScenarioBComponent;
  let fixture: ComponentFixture<ScenarioBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScenarioBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
