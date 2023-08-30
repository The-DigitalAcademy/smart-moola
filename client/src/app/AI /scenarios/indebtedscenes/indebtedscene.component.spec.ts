import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndebtedScenesComponent } from './indebtedscene.component';

describe('IndebtedScenesComponent', () => {
  let component: IndebtedScenesComponent;
  let fixture: ComponentFixture<IndebtedScenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndebtedScenesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndebtedScenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
