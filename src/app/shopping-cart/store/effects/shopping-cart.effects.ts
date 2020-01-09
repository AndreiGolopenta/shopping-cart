import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map,
  switchMap,
  catchError,
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators';

import * as shopingCartActions from '../actions/shopping-cart.actions';
import { ShoppingCartService } from '../../services/shoppingCart.service';
import { Product } from '../../models/product.interface';
import { Filters } from '../../models/filters.interface';
import { UtilityFunctions } from './utilityFunctions';

@Injectable()
export class ShopingCartEffects {
  constructor(
    private actions$: Actions,
    private shoopingCartService: ShoppingCartService
  ) {}

  @Effect()
  loadProducts$ = this.actions$
    .pipe(ofType(shopingCartActions.LOAD_PRODUCTS))
    .pipe(
      switchMap(() => {
        return this.shoopingCartService.getProducts().pipe(
          map((products: Product[]) => {
            const manufacturer = UtilityFunctions.utilityFilters(
              products,
              'manufacturer'
            );
            const season = UtilityFunctions.utilityFilters(products, 'season');
            const gender = UtilityFunctions.utilityFilters(products, 'for');
            const material = UtilityFunctions.utilityFilters(
              products,
              'material'
            );
            const size = UtilityFunctions.utilityFilters(products, 'size');
            const filters = {
              manufacturer,
              season,
              for: gender,
              material,
              size
            };
            return new shopingCartActions.loadProductsSuccess(
              products,
              filters
            );
          }),
          catchError(error =>
            of(new shopingCartActions.loadProductsFail(error))
          )
        );
      })
    );

  @Effect()
  searchProducts$ = this.actions$
    .pipe(ofType(shopingCartActions.SEARCH_PRODUCTS))
    .pipe(
      debounceTime(1000),
      map((action: shopingCartActions.searchProducts) => action.payload),
      distinctUntilChanged(),
      switchMap((searchValue: string) => {
        return this.shoopingCartService.getProducts().pipe(
          map(
            (products: Product[]) =>
              new shopingCartActions.searchProductsSuccess(
                products,
                searchValue
              )
          ),
          catchError(error =>
            of(new shopingCartActions.loadProductsFail(error))
          )
        );
      })
    );

  @Effect()
  loadFilters$ = this.actions$
    .pipe(ofType(shopingCartActions.LOAD_FILTERS))
    .pipe(
      map((action: shopingCartActions.loadFilters) => action.payload),
      switchMap((activeFilters: Filters) => {
        const filters = UtilityFunctions.utilityConvertFilters(activeFilters);
        return this.shoopingCartService.getProducts().pipe(
          map((products: Product[]) => {
            const newProducts = UtilityFunctions.utilityAddFilters(
              products,
              filters
            );
            return new shopingCartActions.loadFiltersSuccess(newProducts);
          })
        );
      })
    );
}
