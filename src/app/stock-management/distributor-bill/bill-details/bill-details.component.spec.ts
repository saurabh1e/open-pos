import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillDetailsComponent } from './bill-details.component';

describe('BillDetailsComponent', () => {
  let component: BillDetailsComponent;
  let fixture: ComponentFixture<BillDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
