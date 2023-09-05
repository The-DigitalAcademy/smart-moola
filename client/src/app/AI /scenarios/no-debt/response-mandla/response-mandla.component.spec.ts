import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandlaResponseComponent } from './response-mandla.component';

describe('MandlaResponseComponent', () => {
  let component: MandlaResponseComponent;
  let fixture: ComponentFixture<MandlaResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandlaResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandlaResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
