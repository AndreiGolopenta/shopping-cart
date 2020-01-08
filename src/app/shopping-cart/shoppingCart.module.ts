import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

import { NgxPaginationModule } from 'ngx-pagination';

import { AngularMaterialModule } from '../angular-material.module';

import { ShoppingCartService } from './services/shoppingCart.service';

import * as fromComponents from './components';

import * as fromContainers from './containers';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'products',
    children: [
      { path: '', component: fromContainers.ProductsComponent },
      { path: 'cart', component: fromContainers.CartComponent },
      { path: ':id', component: fromContainers.ProductDetailComponent }
    ]
  }
];

@NgModule({
  declarations: [...fromComponents.components, ...fromContainers.containers],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    NgxPaginationModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [],
  providers: [ShoppingCartService],
  entryComponents: [fromComponents.SnackBarOrderCompleteComponent]
})
export class ShoppingCartModule {}
