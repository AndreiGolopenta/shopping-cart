import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-order-form',
  templateUrl: './product-order-form.component.html',
  styleUrls: ['./product-order-form.component.scss']
})
export class ProductOrderFormComponent {

  @Input() product: Product;

  @Output() orderProduct = new EventEmitter<Product>();

  constructor(private fb: FormBuilder) {}

  form: FormGroup = this.fb.group({
    size: ['', Validators.required],
    quantity: [1, Validators.min(1)]
  });

  onSubmit() {
    const order = { ...this.product, order: this.form.value }
    this.orderProduct.emit(order);
  }
}
