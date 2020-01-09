import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product.interface';
import { Filters } from '../../models/filters.interface';
import { Router } from '@angular/router';
import { UtilityFunctions } from '../../store/effects/utilityFunctions';
import { chipsPanel } from '../../../animations/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [chipsPanel],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit, OnDestroy {
  
  activeFilters: string[] = [];
  productsStock: number;
  currentPage: number = 1;
  products$: Observable<Product[]>;
  loaded$: Observable<boolean>;
  sortBy$: Observable<string>;
  filters$: Observable<Filters>;
  filters: Filters;
  productsStockSubscription: Subscription;
  filtersSubscription: Subscription;

  constructor(
    private store: Store<fromStore.ProductsState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.sortBy$ = this.store.select(fromStore.getSortBy);
    this.loaded$ = this.store.select(fromStore.getProductsLoaded);
    this.products$ = this.store.select(fromStore.getAllProducts);
    this.productsStockSubscription = this.store
      .select(fromStore.getProductsStock)
      .subscribe((value: number) => (this.productsStock = value));

    if (!this.productsStock) {
      this.store.dispatch(new fromStore.loadProducts());
    }

    this.filters$ = this.store.select(fromStore.getProductsFilters);
    this.filtersSubscription = this.store
      .select(fromStore.getProductsFilters)
      .subscribe((filters: Filters) => {
        this.filters = filters;
        const activeFilters = UtilityFunctions.utilityConvertFilters(filters);
        this.activeFilters = UtilityFunctions.utilityChips(activeFilters);
      });
  }

  ngOnDestroy() {
    this.productsStockSubscription.unsubscribe();
    this.filtersSubscription.unsubscribe();
  }

  getOrderBy(value: string) {
    switch (value) {
      case 'Popularity': {
        return this.store.dispatch(
          new fromStore.sortProductsByPopularity(value)
        );
      }
      case 'Price ascending': {
        return this.store.dispatch(
          new fromStore.sortProductsByPriceAscending(value)
        );
      }
      case 'Price descending': {
        return this.store.dispatch(
          new fromStore.sortProductsByPriceDescending(value)
        );
      }
    }
  }

  viewProductDetail(product: Product) {
    this.router.navigate(['/products', product.id]);
  }

  setFilters(event: Filters) {
    this.store.dispatch(new fromStore.loadFilters(event));
  }

  handleRemoveFilter(event: string) {
    const value = event.toLowerCase();
    this.store.dispatch(new fromStore.removeFilter(value));
    this.store.dispatch(new fromStore.loadFilters(this.filters));
  }

  handleRemoveAllFilters() {
    this.store.dispatch(new fromStore.removeAllFilters());
    this.store.dispatch(new fromStore.loadFilters(this.filters));
  }
  
}
