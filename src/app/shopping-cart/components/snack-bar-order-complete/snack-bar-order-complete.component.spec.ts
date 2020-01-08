import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarOrderCompleteComponent } from './snack-bar-order-complete.component';

describe('SnackBarOrderCompleteComponent', () => {
  let component: SnackBarOrderCompleteComponent;
  let fixture: ComponentFixture<SnackBarOrderCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarOrderCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarOrderCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
