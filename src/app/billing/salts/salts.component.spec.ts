import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltsComponent } from './salts.component';

describe('SaltsComponent', () => {
  let component: SaltsComponent;
  let fixture: ComponentFixture<SaltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaltsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
