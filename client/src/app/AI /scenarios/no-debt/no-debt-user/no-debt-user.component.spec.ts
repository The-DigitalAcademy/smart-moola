import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDebtUserComponent } from './no-debt-user.component';

describe('NoDebtUserComponent', () => {
  let component: NoDebtUserComponent;
  let fixture: ComponentFixture<NoDebtUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoDebtUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoDebtUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
