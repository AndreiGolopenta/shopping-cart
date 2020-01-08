import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromShoppingCart from '../reducers/shopping-cart.reducers';
import { Product } from '../../models/product.interface';

export const getShoppingCartState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.products
);

export const getAllProducts = createSelector(
  getShoppingCartState,
  fromShoppingCart.getProductsData
);

export const getProductsLoaded = createSelector(
  getShoppingCartState,
  fromShoppingCart.getProductsLoaded
);

export const getProductsStock = createSelector(
  getShoppingCartState,
  fromShoppingCart.getProductsStock
);

export const getOneProduct = createSelector(
  getAllProducts,
  (state: Product[], props: { id: number }) => {
    return state.filter((product: Product) => product.id === props.id)[0];
  }
);

export const getSortBy = createSelector(
  getShoppingCartState,
  fromShoppingCart.getSortBy
);

export const getProductsFilters = createSelector(
  getShoppingCartState,
  fromShoppingCart.getFilters
)