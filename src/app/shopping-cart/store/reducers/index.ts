import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromShoppingCart from './shopping-cart.reducers';
import * as fromCart from './cart.reducers';

export interface ProductsState {
  products: fromShoppingCart.ShoppingCartState;
  cart: fromCart.CartState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  products: fromShoppingCart.reducer,
  cart: fromCart.reducer
};

export const getProductsState = createFeatureSelector('products');

