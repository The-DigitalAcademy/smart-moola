import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndebtedUserComponent } from './indebted-user.component';

describe('IndebtedUserComponent', () => {
  let component: IndebtedUserComponent;
  let fixture: ComponentFixture<IndebtedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndebtedUserComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IndebtedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
