/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShortageComponent } from './shortage.component';

describe('ShortageComponent', () => {
  let component: ShortageComponent;
  let fixture: ComponentFixture<ShortageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
