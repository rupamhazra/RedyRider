import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficePoolCarServicePage } from './office-pool-car-service.page';

describe('OfficePoolCarServicePage', () => {
  let component: OfficePoolCarServicePage;
  let fixture: ComponentFixture<OfficePoolCarServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficePoolCarServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficePoolCarServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
