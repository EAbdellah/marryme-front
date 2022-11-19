import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMakeUpHairServiceComponent } from './view-make-up-hair-service.component';

describe('ViewMakeUpHairServiceComponent', () => {
  let component: ViewMakeUpHairServiceComponent;
  let fixture: ComponentFixture<ViewMakeUpHairServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMakeUpHairServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMakeUpHairServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
