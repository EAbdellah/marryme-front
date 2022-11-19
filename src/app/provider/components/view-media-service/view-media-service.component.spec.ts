import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMediaServiceComponent } from './view-media-service.component';

describe('ViewMediaServiceComponent', () => {
  let component: ViewMediaServiceComponent;
  let fixture: ComponentFixture<ViewMediaServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMediaServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMediaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
