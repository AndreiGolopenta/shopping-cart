import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as fromComponents from '../../components'; 
import { Subscription, Observable } from 'rxjs';
import { Product } from '../../models/product.interface';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['name', 'order', 'price', 'itemTotal'];
  cart: Product[];
  totalValueOfOrder$: Observable<number>;
  cartSubscription: Subscription;

  constructor(
    private store: Store<fromStore.ProductsState>,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.totalValueOfOrder$ = this.store.select(fromStore.getTotalValueOfOrder);
    this.cartSubscription = this.store
      .select(fromStore.getProductsFromCart)
      .subscribe((data: Product[]) => (this.cart = data));
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

  get disabled() {
    return !!this.cart.length ? false : true;
  }

  calculatePrice(quantity: number, price: number) {
    return (quantity * price).toFixed(2);
  }

  handleRefreshOrder(event: Product) {
    this.store.dispatch(new fromStore.UpdateProductQuantityFromCart(event));
  }

  handleDeleteProductFromCart(event: Product) {
    this.store.dispatch(new fromStore.RemoveFromCart(event));
  }

  openSnackBar() {
    this.snackBar.openFromComponent(fromComponents.SnackBarOrderCompleteComponent, {
      duration: 5000
    });
    this.router.navigate(['']);
    this.store.dispatch(new fromStore.EmptyCart());
  }
}
