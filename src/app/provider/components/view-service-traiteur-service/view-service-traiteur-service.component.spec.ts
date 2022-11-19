import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServiceTraiteurServiceComponent } from './view-service-traiteur-service.component';

describe('ViewServiceTraiteurServiceComponent', () => {
  let component: ViewServiceTraiteurServiceComponent;
  let fixture: ComponentFixture<ViewServiceTraiteurServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewServiceTraiteurServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewServiceTraiteurServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
