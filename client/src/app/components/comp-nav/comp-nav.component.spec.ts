import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNavComponent } from './comp-nav.component';

describe('CompNavComponent', () => {
  let component: CompNavComponent;
  let fixture: ComponentFixture<CompNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
