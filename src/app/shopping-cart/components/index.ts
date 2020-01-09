import { ProductCardComponent } from './product-card/product-card.component';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { ImageContainerComponent } from './image-container/image-container.component';
import { PriceComponent } from './price/price.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductOrderFormComponent } from './product-order-form/product-order-form.component';
import { CartTableProductTabComponent } from './cart-table-product-tab/cart-table-product-tab.component';
import { TableQuantityTabComponent } from './table-quantity-tab/table-quantity-tab.component';
import { SnackBarOrderCompleteComponent } from './snack-bar-order-complete/snack-bar-order-complete.component';
import { FilterProductsComponent } from './filter-products/filter-products.component';
import { FiltersExpansionPanelComponent } from './filters-expansion-panel/filters-expansion-panel.component';
import { InfoActiveFiltersComponent } from '../components/info-active-filters/info-active-filters.component';

export const components: any[] = [
  ProductCardComponent,
  DropDownListComponent,
  ImageContainerComponent,
  PriceComponent,
  ProductDescriptionComponent,
  ProductOrderFormComponent,
  CartTableProductTabComponent,
  TableQuantityTabComponent,
  SnackBarOrderCompleteComponent,
  FilterProductsComponent,
  FiltersExpansionPanelComponent,
  InfoActiveFiltersComponent
];

export * from './snack-bar-order-complete/snack-bar-order-complete.component';
