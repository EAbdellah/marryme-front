import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllFermetureComponent } from './view-all-fermeture.component';

describe('ViewAllFermetureComponent', () => {
  let component: ViewAllFermetureComponent;
  let fixture: ComponentFixture<ViewAllFermetureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllFermetureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllFermetureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
