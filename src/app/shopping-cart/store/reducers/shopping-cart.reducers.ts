import * as fromShoppingCart from '../actions/shopping-cart.actions';
import { Product } from '../../models/product.interface';
import { Filters, Category } from '../../models/filters.interface';

export interface ShoppingCartState {
  data: Product[];
  loaded: boolean;
  stock: number;
  sortBy: string;
  filters: Filters;
}

export const initialState: ShoppingCartState = {
  data: [],
  loaded: false,
  stock: NaN,
  sortBy: 'Popularity',
  filters: {
    manufacturer: [],
    material: [],
    for: [],
    size: [],
    season: []
  }
};

export function reducer(
  state: ShoppingCartState = initialState,
  action: fromShoppingCart.productsActions
) {
  switch (action.type) {
    case fromShoppingCart.LOAD_PRODUCTS: {
      return {
        ...state
      };
    }

    case fromShoppingCart.LOAD_PRODUCTS_FAIL: {
      return {
        ...state,
        loaded: false
      };
    }

    case fromShoppingCart.LOAD_PRODUCTS_SUCCESS: {
      const data = action.payload;
      const filters = action.filters;
      return {
        ...state,
        loaded: true,
        data,
        stock: data.length,
        filters
      };
    }

    case fromShoppingCart.SORT_PRODUCTS_BY_PRICE_ASCENDING: {
      const sortedState = [...state.data];
      const sortBy = action.payload;
      sortedState.sort((a: Product, b: Product) => a.price - b.price);
      return {
        ...state,
        data: sortedState,
        sortBy
      };
    }

    case fromShoppingCart.SORT_PRODUCTS_BY_PRICE_DESCENDING: {
      const sortedState = [...state.data];
      const sortBy = action.payload;
      sortedState.sort((a: Product, b: Product) => b.price - a.price);
      return {
        ...state,
        data: sortedState,
        sortBy
      };
    }

    case fromShoppingCart.SORT_PRODUCTS_BY_PRICE_POPULARITY: {
      const sortedState = [...state.data];
      const sortBy = action.payload;
      sortedState.sort((a: Product, b: Product) => a.id - b.id);
      return {
        ...state,
        data: sortedState,
        sortBy
      };
    }

    case fromShoppingCart.SEARCH_PRODUCTS_SUCCESS: {
      const { searchValue, payload: products } = action;
      const searchResult = products.filter((product: Product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      return {
        ...state,
        data: searchResult
      };
    }

    case fromShoppingCart.BUILD_FILTERS_FROM_DATA: {
      const filters = action.payload;
      return {
        ...state,
        filters
      };
    }

    case fromShoppingCart.LOAD_FILTERS: {
      const filters = action.payload;
      return {
        ...state,
        filters,
        loaded: false
      };
    }

    case fromShoppingCart.LOAD_FILTERS_SUCCESS: {
      const newData = action.payload;
      return {
        ...state,
        loaded: true,
        data: newData
      };
    }

    case fromShoppingCart.REMOVE_FILTER: {
      const filterCategory: Category[] = [ ...state.filters[action.payload] ];
      filterCategory.forEach((value: Category) => {
        value.checked = false;
      });
      const filters = { ...state.filters, [action.payload]: filterCategory };
      return {
        ...state,
        filters
      };
    }

    case fromShoppingCart.REMOVE_ALL_FILTERS: {
      const filters: Filters = { ...state.filters };
      
      for (let prop in filters) {
        const values = filters[prop].map((value: Category) => {
          return { name: value.name, checked: false }
        })
        filters[prop] = values;
      }

      return {
        ...state,
        filters
      }
    }

    default: {
      return state;
    }
  }
}

export const getProductsData = (state: ShoppingCartState) => state.data;
export const getProductsLoaded = (state: ShoppingCartState) => state.loaded;
export const getProductsStock = (state: ShoppingCartState) => state.stock;
export const getSortBy = (state: ShoppingCartState) => state.sortBy;
export const getFilters = (state: ShoppingCartState) => state.filters;
