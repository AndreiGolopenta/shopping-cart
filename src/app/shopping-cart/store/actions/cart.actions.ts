import { Action } from '@ngrx/store';
import { Product } from '../../models/product.interface';

export const ADD_TO_CART = '[shoppingCart] Add To Cart';
export const REMOVE_FROM_CART = '[shoppingCart] Remove from Cart';
export const EMPTY_CART = '[shoppingCart] Empty Cart';
export const UPDATE_PRODUCT_QUANTITY_FROM_CART =
  '[shoppingCart] Update Product Quantity From Cart';

export class AddToCart implements Action {
  readonly type = ADD_TO_CART;
  constructor(public payload: Product) {}
}

export class RemoveFromCart implements Action {
  readonly type = REMOVE_FROM_CART;
  constructor(public payload: Product) {}
}

export class UpdateProductQuantityFromCart implements Action {
  readonly type = UPDATE_PRODUCT_QUANTITY_FROM_CART;
  constructor(public payload: Product) {}
}

export class EmptyCart implements Action {
  readonly type = EMPTY_CART;
}

export type cartsActions =
  | AddToCart
  | RemoveFromCart
  | UpdateProductQuantityFromCart
  | EmptyCart;
