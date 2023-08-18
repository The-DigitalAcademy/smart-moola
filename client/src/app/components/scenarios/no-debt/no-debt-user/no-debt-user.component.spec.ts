import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:client/src/app/components/modal/modal.component.spec.ts
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
=======
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
>>>>>>> 07327028e841db56c2f285b740c08dab3109d233:client/src/app/components/scenarios/no-debt/no-debt-user/no-debt-user.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
