import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayRidesPage } from './today-rides.page';

describe('TodayRidesPage', () => {
  let component: TodayRidesPage;
  let fixture: ComponentFixture<TodayRidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayRidesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayRidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
