import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-cart-table-product-tab',
  templateUrl: './cart-table-product-tab.component.html',
  styleUrls: ['./cart-table-product-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartTableProductTabComponent implements OnInit {

  @Input() data: Product;

  ngOnInit() {
  }

}
