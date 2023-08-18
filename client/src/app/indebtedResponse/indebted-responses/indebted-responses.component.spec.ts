import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndebtedResponsesComponent } from './indebted-responses.component';

describe('IndebtedResponsesComponent', () => {
  let component: IndebtedResponsesComponent;
  let fixture: ComponentFixture<IndebtedResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndebtedResponsesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndebtedResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
