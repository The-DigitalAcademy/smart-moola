import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndebtedScenariosComponent } from './indebted.component';

describe('IndebtedScenariosComponent', () => {
  let component: IndebtedScenariosComponent;
  let fixture: ComponentFixture<IndebtedScenariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndebtedScenariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndebtedScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
