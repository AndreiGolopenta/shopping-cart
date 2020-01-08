import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShoppingCartModule } from './shopping-cart/shoppingCart.module';
import { AppHeaderModule } from './app-header/app-header.module';

import { AngularMaterialModule } from './angular-material.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShoppingCartModule,
    RouterModule.forRoot([]),

    BrowserAnimationsModule,
    AngularMaterialModule,
    AppHeaderModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
