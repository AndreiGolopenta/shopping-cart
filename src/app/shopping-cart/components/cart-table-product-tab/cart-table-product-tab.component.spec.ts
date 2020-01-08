import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTableProductTabComponent } from './cart-table-product-tab.component';

describe('CartTableProductTabComponent', () => {
  let component: CartTableProductTabComponent;
  let fixture: ComponentFixture<CartTableProductTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartTableProductTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTableProductTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
