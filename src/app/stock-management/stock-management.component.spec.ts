/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StockManagementComponent } from './stock-management.component';

describe('StockManagementComponent', () => {
  let component: StockManagementComponent;
  let fixture: ComponentFixture<StockManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
