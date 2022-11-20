import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllreservationComponent } from './view-allreservation.component';

describe('ViewAllreservationComponent', () => {
  let component: ViewAllreservationComponent;
  let fixture: ComponentFixture<ViewAllreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllreservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
