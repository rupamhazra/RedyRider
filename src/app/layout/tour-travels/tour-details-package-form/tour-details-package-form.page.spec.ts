import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailsPackageFormPage } from './tour-details-package-form.page';

describe('TourDetailsPackageFormPage', () => {
  let component: TourDetailsPackageFormPage;
  let fixture: ComponentFixture<TourDetailsPackageFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourDetailsPackageFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDetailsPackageFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
