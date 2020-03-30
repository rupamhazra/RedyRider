import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailsPackagePage } from './tour-details-package.page';

describe('TourDetailsPackagePage', () => {
  let component: TourDetailsPackagePage;
  let fixture: ComponentFixture<TourDetailsPackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourDetailsPackagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDetailsPackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
