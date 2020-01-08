import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
  
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromStore.ProductsState>
  ) {}

  ngOnInit() {
    this.product$ = this.route.params.pipe(
      map((data: Params) => parseInt(data.id)),
      switchMap((idValue: number) =>
        this.store.select(fromStore.getOneProduct, { id: idValue })
      )
    );
  }

  handleOrder(value: Product) {
    const orderedProduct = { ...value, cartId: `${value.id}${value.order.size}` };
    this.store.dispatch(new fromStore.AddToCart(orderedProduct));
  }
}
