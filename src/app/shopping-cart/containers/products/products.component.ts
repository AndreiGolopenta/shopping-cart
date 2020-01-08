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
import { Filters, Category, UtilityFilters } from '../../models/filters.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit, OnDestroy {
  
  productsStock: number;
  currentPage: number = 1;
  products$: Observable<Product[]>;
  loaded$: Observable<boolean>;
  sortBy$: Observable<string>;
  filters$: Observable<Filters>;
  productsStockSubscription: Subscription;

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
  }

  ngOnDestroy() {
    this.productsStockSubscription.unsubscribe();
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
}
