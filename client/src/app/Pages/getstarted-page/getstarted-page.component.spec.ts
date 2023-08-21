import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstartedPageComponent } from './getstarted-page.component';

describe('GetstartedPageComponent', () => {
  let component: GetstartedPageComponent;
  let fixture: ComponentFixture<GetstartedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetstartedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetstartedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
