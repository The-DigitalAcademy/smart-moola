import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndebtedResponseComponent } from './indebted-response.component';

describe('IndebtedResponseComponent', () => {
  let component: IndebtedResponseComponent;
  let fixture: ComponentFixture<IndebtedResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndebtedResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndebtedResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
