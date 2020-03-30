import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPagePage } from './common-page.page';

describe('CommonPagePage', () => {
  let component: CommonPagePage;
  let fixture: ComponentFixture<CommonPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
