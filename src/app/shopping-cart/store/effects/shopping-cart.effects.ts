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
import {
  Filters,
  Category,
  UtilityFilters
} from '../../models/filters.interface';

@Injectable()
export class ShopingCartEffects {
  constructor(
    private actions$: Actions,
    private shoopingCartService: ShoppingCartService
  ) {}

  utilityFilters(data: Product[], filter: string): Category[] {
    const extractFilters: string[] = data.map((product: Product) => {
      return product[filter];
    });
    const flatExtractedFilters = [].concat(...extractFilters);
    return flatExtractedFilters
      .reduce(
        (prev: string, next: string) =>
          prev.includes(next) ? prev : [...prev, next],
        []
      )
      .map((value: string) => {
        return { name: value, checked: false };
      });
  }

  utilityConvertFilters(filters: Filters): UtilityFilters {
    const result: UtilityFilters = {
      manufacturer: [],
      size: [],
      for: [],
      material: [],
      season: []
    };
    for (let prop in filters) {
      filters[prop].forEach((value: Category) => {
        if (value.checked) {
          result[prop].push(value.name);
        }
      });
    }
    return result;
  }

  utilityAddFilters(data: Product[], filters: UtilityFilters): Product[] {
    let newData: Product[] = [];
    for (let prop in filters) {
      if (filters[prop].length) {
        if (!newData.length) {
          newData = data;
        }
        switch (prop) {
          case 'size': {
            const result = newData.filter((product: Product) => {
              const propertyFromProduct = product[prop].join('');
              return (
                filters[prop].filter((val: string) =>
                  propertyFromProduct.includes(val)
                ).length === filters[prop].length
              );
            });
            return (newData = result);
          }
          default: {
            const propertyFromFilter = filters[prop].join('');
            const result = newData.filter((product: Product) =>
              propertyFromFilter.includes(product[prop])
            );
            newData = result;
          }
        }
      }
    }
    return newData;
  }

  @Effect()
  loadProducts$ = this.actions$
    .pipe(ofType(shopingCartActions.LOAD_PRODUCTS))
    .pipe(
      switchMap(() => {
        return this.shoopingCartService.getProducts().pipe(
          map((products: Product[]) => {
            const manufacturer = this.utilityFilters(products, 'manufacturer');
            const season = this.utilityFilters(products, 'season');
            const gender = this.utilityFilters(products, 'for');
            const material = this.utilityFilters(products, 'material');
            const size = this.utilityFilters(products, 'size');
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
        const filters = this.utilityConvertFilters(activeFilters);
        return this.shoopingCartService.getProducts().pipe(
          map((products: Product[]) => {
            const newProducts = this.utilityAddFilters(products, filters);
            return new shopingCartActions.loadFiltersSuccess(newProducts);
          })
        );
      })
    );
}
