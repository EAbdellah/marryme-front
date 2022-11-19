import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalleServiceComponent } from './view-salle-service.component';

describe('ViewSalleServiceComponent', () => {
  let component: ViewSalleServiceComponent;
  let fixture: ComponentFixture<ViewSalleServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSalleServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSalleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
