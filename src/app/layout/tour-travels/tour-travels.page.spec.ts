import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourTravelsPage } from './tour-travels.page';

describe('TourTravelsPage', () => {
  let component: TourTravelsPage;
  let fixture: ComponentFixture<TourTravelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourTravelsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourTravelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
