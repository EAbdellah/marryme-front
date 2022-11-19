import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTraiteurServiceComponent } from './view-traiteur-service.component';

describe('ViewTraiteurServiceComponent', () => {
  let component: ViewTraiteurServiceComponent;
  let fixture: ComponentFixture<ViewTraiteurServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTraiteurServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTraiteurServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
