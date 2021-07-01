import { SET_ON_CART, UPDATE_CART_COUNTER } from '../actions/cart';

const INITIAL_STATE = {
  cart: [],
  counter: '',
}

const cart = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_ON_CART:
    return ({ ...state,
      cart:  action.cart });
    case UPDATE_CART_COUNTER:
      return ({ ...state,
        counter:  action.counter });
    default:
      return state
  }
};

export default cart;
