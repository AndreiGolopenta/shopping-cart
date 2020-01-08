import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy
} from '@angular/core';
import * as fromStore from './shopping-cart/store';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './shopping-cart/models/product.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  totalOrderPrice$: Observable<number>;
  cartQuantity$: Observable<number>;

  constructor(
    private store: Store<fromStore.ProductsState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.totalOrderPrice$ = this.store.select(fromStore.getTotalValueOfOrder);
    this.cartQuantity$ = this.store.select(fromStore.getProductsFromCart).pipe(
      map((products: Product[]) =>
        products.reduce((prev, next: Product) => {
          return prev + next.order.quantity;
        }, 0)
      )
    );
  }

  searchProducts(value: string) {
    this.store.dispatch(new fromStore.searchProducts(value));
  }

  handleNavigate() {
    this.router.navigate(['/products/cart']);
  }

}
