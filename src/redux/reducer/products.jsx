import { REQUEST_ALL_PRODUCTS, PRODUCTS_BELLOW, PRODUCTS_ABOVE } from '../actions/products';

const INITIAL_STATE = {
  productsBellow:'',
  productsAbove: '',
  allProducts: [],
}

const products = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PRODUCTS_BELLOW:
    return ({ ...state,
      productsBellow: action.productsBellow });
  case PRODUCTS_ABOVE:
    return ({ ...state,
      productsAbove: action.productsAbove });
  case REQUEST_ALL_PRODUCTS:
    return ({ ...state,
      allProducts: [state.productsAbove, state.productsBellow] });
    default:
      return state
  }
};

export default products;
