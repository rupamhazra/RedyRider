import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountCommonPagePage } from './myaccount-common-page.page';

describe('MyaccountCommonPagePage', () => {
  let component: MyaccountCommonPagePage;
  let fixture: ComponentFixture<MyaccountCommonPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountCommonPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountCommonPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
