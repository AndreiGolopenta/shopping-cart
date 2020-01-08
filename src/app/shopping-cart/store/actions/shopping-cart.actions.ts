import { Action } from '@ngrx/store';

import { Product } from '../../models/product.interface';
import { Filters } from '../../models/filters.interface';

export const LOAD_PRODUCTS = '[shoppingCart] Load Products';
export const LOAD_PRODUCTS_FAIL = '[shoppingCart] Load Products Fail';
export const LOAD_PRODUCTS_SUCCESS = '[shoppingCart] Load Products Success';
export const SORT_PRODUCTS_BY_PRICE_ASCENDING =
  '[shoppingCart] Sort Products by Price Ascending';
export const SORT_PRODUCTS_BY_PRICE_DESCENDING =
  '[shoppingCart] Sort Products by Price Descending';
export const SORT_PRODUCTS_BY_PRICE_POPULARITY =
  '[shoppingCart] Sort Products by Popularity';
export const SEARCH_PRODUCTS = '[shoppingCart] Search Products';
export const SEARCH_PRODUCTS_SUCCESS = '[shoppingCart] Search Products Success';
export const BUILD_FILTERS_FROM_DATA = '[shoppingCart] Build Filters From Data';
export const LOAD_FILTERS = '[shoppingCart] Load Filters';
export const LOAD_FILTERS_SUCCESS = '[shoppingCart] Add Filters Success';


export class loadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
}

export class loadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL;
  constructor(public payload: any) {}
}

export class loadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: Product[], public filters: Filters) {}
}

export class sortProductsByPriceAscending implements Action {
  readonly type = SORT_PRODUCTS_BY_PRICE_ASCENDING;
  constructor(public payload: string) {}
}

export class sortProductsByPriceDescending implements Action {
  readonly type = SORT_PRODUCTS_BY_PRICE_DESCENDING;
  constructor(public payload: string) {}
}

export class sortProductsByPopularity implements Action {
  readonly type = SORT_PRODUCTS_BY_PRICE_POPULARITY;
  constructor(public payload: string) {}
}

export class searchProducts implements Action {
  readonly type = SEARCH_PRODUCTS;
  constructor(public payload: string) {}
}

export class searchProductsSuccess implements Action {
  readonly type = SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload: Product[], public searchValue: string) {}
}

export class buildFiltersFromData implements Action {
  readonly type = BUILD_FILTERS_FROM_DATA;
  constructor(public payload: Filters) {}
}

export class loadFilters implements Action {
  readonly type = LOAD_FILTERS;
  constructor(public payload: Filters) {}
}

export class loadFiltersSuccess implements Action {
  readonly type = LOAD_FILTERS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export type productsActions =
  | loadProducts
  | loadProductsFail
  | loadProductsSuccess
  | sortProductsByPopularity
  | sortProductsByPriceAscending
  | sortProductsByPriceDescending
  | searchProducts
  | searchProductsSuccess
  | buildFiltersFromData
  | loadFilters
  | loadFiltersSuccess;
