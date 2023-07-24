import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompButComponent } from './comp-but.component';

describe('CompButComponent', () => {
  let component: CompButComponent;
  let fixture: ComponentFixture<CompButComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompButComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
