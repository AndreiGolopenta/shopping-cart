import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';

const materialModules: any[] = [
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatGridListModule,
  MatTableModule,
  MatTabsModule,
  MatListModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatRadioModule,
  MatCheckboxModule,
  MatChipsModule
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules]
})
export class AngularMaterialModule {}
