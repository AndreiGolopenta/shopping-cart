import * as fromCart from '../actions/cart.actions';
import { Product } from '../../models/product.interface';

export interface CartState {
  cart: { [id: string]: Product };
  totalPrice: number;
}

export const initialState: CartState = {
  cart: {},
  totalPrice: 0
};

function totalPrice(cart: { [id: string]: Product }) {
  return Object.values(cart).reduce((prev, next: Product) => {
    const nextValue = parseFloat((next.order.quantity * next.price).toFixed(2));
    return (prev * 100 + nextValue * 100) / 100;
  }, 0);
}

export function reducer(
  state: CartState = initialState,
  action: fromCart.cartsActions
) {
  switch (action.type) {
    case fromCart.ADD_TO_CART: {
      const order = { ...action.payload };
      if (Object.prototype.hasOwnProperty.call(state.cart, order.cartId)) {
        order.order.quantity += state.cart[order.cartId].order.quantity;
      }

      const newCart = { ...state.cart, [order.cartId]: order };
      const newTotalPrice = totalPrice(newCart);
      return {
        ...state,
        cart: newCart,
        totalPrice: newTotalPrice
      };
    }

    case fromCart.REMOVE_FROM_CART: {
      const { [action.payload.cartId]: removed, ...newCart } = state.cart;
      const newTotalPrice = totalPrice(newCart);
      return {
        ...state,
        cart: newCart,
        totalPrice: newTotalPrice
      };
    }

    case fromCart.UPDATE_PRODUCT_QUANTITY_FROM_CART: {
      const newCart = {
        ...state.cart,
        [action.payload.cartId]: action.payload
      };
      const newTotalPrice = totalPrice(newCart);
      return {
        ...state,
        cart: newCart,
        totalPrice: newTotalPrice
      }
    }

    case fromCart.EMPTY_CART: {
      const newCart = {};
      return {
        ...state,
        cart: newCart,
        totalPrice: 0
      }
    }

    default: {
      return {
        ...state
      };
    }
  }
}

export const getProductsFromCart = (state: CartState) =>
  Object.values(state.cart);
export const getTotalValueOfOrder = (state: CartState) => state.totalPrice;
