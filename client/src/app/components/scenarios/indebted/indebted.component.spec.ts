import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndebtedScenarioComponent } from './indebted.component';

describe('IndebtedScenarioComponent', () => {
  let component: IndebtedScenarioComponent;
  let fixture: ComponentFixture<IndebtedScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndebtedScenarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndebtedScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
