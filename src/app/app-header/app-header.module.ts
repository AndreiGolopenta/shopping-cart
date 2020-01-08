import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material.module';

import * as fromComponents from './components';

@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    ...fromComponents.components
  ]
})
export class AppHeaderModule {}
