import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMusiqueServiceComponent } from './view-musique-service.component';

describe('ViewMusiqueServiceComponent', () => {
  let component: ViewMusiqueServiceComponent;
  let fixture: ComponentFixture<ViewMusiqueServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMusiqueServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMusiqueServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
