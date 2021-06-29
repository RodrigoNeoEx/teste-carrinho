import { REQUEST_PRODUCTS_BELLOW_TEN, REQUEST_PRODUCTS_ABOVE_TEN } from '../actions/products';

const INITIAL_STATE = {
  productsBellowTen: [],
  productsAboveTen: [],
}

const products = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_PRODUCTS_BELLOW_TEN:
    return ({ ...state,
      productsBellowTen:  action.productsBellowTen });
    case REQUEST_PRODUCTS_ABOVE_TEN:
      return ({ ...state,
        productsAboveTen:  action.productsAboveTen });
    default:
      return state
  }
};

export default products;
