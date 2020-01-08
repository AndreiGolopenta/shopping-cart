import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromCart from '../reducers/cart.reducers';

export const getCartState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.cart
);

export const getProductsFromCart = createSelector(
  getCartState,
  fromCart.getProductsFromCart
);

export const getTotalValueOfOrder = createSelector(
  getCartState,
  fromCart.getTotalValueOfOrder
);
