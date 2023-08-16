import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDebtUserScenariosComponent } from './no-debt-scenarios.component';

describe('NoDebtUserScenariosComponent', () => {
  let component: NoDebtUserScenariosComponent;
  let fixture: ComponentFixture<NoDebtUserScenariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoDebtUserScenariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoDebtUserScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
