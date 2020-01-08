import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent {

  @Input() product: Product;

}
