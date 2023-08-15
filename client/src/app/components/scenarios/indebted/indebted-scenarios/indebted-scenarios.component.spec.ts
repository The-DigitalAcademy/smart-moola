import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndebtedUserScenariosComponent } from './indebted-scenarios.component';

describe('IndebtedUserScenariosComponent', () => {
  let component: IndebtedUserScenariosComponent;
  let fixture: ComponentFixture<IndebtedUserScenariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndebtedUserScenariosComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IndebtedUserScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
