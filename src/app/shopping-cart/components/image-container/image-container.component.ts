import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent {

  @Input() product: Product;

}
