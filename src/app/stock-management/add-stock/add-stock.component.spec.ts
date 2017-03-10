/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddStockComponent } from './add-stock.component';

describe('AddStockComponent', () => {
  let component: AddStockComponent;
  let fixture: ComponentFixture<AddStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
