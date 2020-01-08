import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {

  @Input() product: Product;


}
