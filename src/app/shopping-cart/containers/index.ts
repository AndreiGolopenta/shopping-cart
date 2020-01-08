import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';

export const containers: any[] = [ProductsComponent, ProductDetailComponent, CartComponent];

export * from './products/products.component';
export * from './product-detail/product-detail.component';
export * from './cart/cart.component';