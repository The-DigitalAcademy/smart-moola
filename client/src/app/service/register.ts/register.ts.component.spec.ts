import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTsComponent } from './register.ts.component';

describe('RegisterTsComponent', () => {
  let component: RegisterTsComponent;
  let fixture: ComponentFixture<RegisterTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
