import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteStoppageModalPage } from './route-stoppage-modal.page';

describe('RouteStoppageModalPage', () => {
  let component: RouteStoppageModalPage;
  let fixture: ComponentFixture<RouteStoppageModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteStoppageModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteStoppageModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
