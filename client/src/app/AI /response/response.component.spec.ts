import { ComponentFixture, TestBed } from '@angular/core/testing';

import { responseComponent } from './response.component';

describe('ResponseComponent', () => {
  let component: responseComponent;
  let fixture: ComponentFixture<responseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ responseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(responseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
