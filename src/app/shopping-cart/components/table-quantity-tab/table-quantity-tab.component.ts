import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { Product } from '../../models/product.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-quantity-tab',
  templateUrl: './table-quantity-tab.component.html',
  styleUrls: ['./table-quantity-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableQuantityTabComponent implements OnInit {

  @Input() data: Product;

  @Output() refreshOrder = new EventEmitter<Product>();
  @Output() deleteProductFromCart = new EventEmitter<Product>();

  constructor(private fb: FormBuilder) {}

  form: FormGroup = this.fb.group({
    quantity: [1, Validators.min(1)]
  });

  ngOnInit() {
    this.form.get('quantity').setValue(this.data.order.quantity);
  }

  onSubmit() {
    const updateQuantity = {
      ...this.data,
      order: { ...this.data.order, ...this.form.value }
    };
    this.refreshOrder.emit(updateQuantity);
  }

  deleteFromCart() {
    this.deleteProductFromCart.emit(this.data);
  }
}
