import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { scale } from '../../../animations/animations';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  animations: [scale],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {

  scaleCardAnimation: boolean = false;
  integerPrice: number;
  decimalPrice: string;

  @Input() product: Product;

  @Output() detail = new EventEmitter<Product>();

  ngOnInit() {
    this.integerPrice = Math.floor(this.product.price);
    this.decimalPrice = (this.product.price * 100 - this.integerPrice * 100).toFixed(0)
  }

  onMouseEnter() {
    this.scaleCardAnimation = !this.scaleCardAnimation;
  }

  onMouseLeave() {
    this.scaleCardAnimation = !this.scaleCardAnimation;
  }

  viewDetails() {
    this.detail.emit(this.product);
  }
}
