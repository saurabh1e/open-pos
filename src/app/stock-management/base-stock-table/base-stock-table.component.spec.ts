/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BaseStockTableComponent } from './base-stock-table.component';

describe('BaseStockTableComponent', () => {
  let component: BaseStockTableComponent;
  let fixture: ComponentFixture<BaseStockTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseStockTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseStockTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
