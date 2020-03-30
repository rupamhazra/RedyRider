import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingThankyouPage } from './booking-thankyou.page';

describe('BookingThankyouPage', () => {
  let component: BookingThankyouPage;
  let fixture: ComponentFixture<BookingThankyouPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingThankyouPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingThankyouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
