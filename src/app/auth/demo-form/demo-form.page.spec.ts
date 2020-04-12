import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormPage } from './demo-form.page';

describe('DemoFormPage', () => {
  let component: DemoFormPage;
  let fixture: ComponentFixture<DemoFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
