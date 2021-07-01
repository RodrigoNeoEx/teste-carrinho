import { setOnCart, updateCartCounter } from './cart';
import { requestAllProducts, productsBellow, productsAbove } from './products';
import {
  fetchFakeBellowAPI,
  fetchFakeAboveAPI,
} from '../../services/requestAPI/fakeAPI';

export {
  setOnCart,
  updateCartCounter,
  requestAllProducts,
  productsBellow,
  productsAbove,
};

export const requestFakeBellowAPI = () => async (dispatch) => {
  console.log('foi?')
  dispatch(fetchFakeBellowAPI());
  try {
    const response = await fetchFakeBellowAPI();
    console.log(response)
    return dispatch(requestAllProducts(response));
  } catch (error) {
    return console.log(error);
  }
};

export const requestFakeAboveAPI = () => async (dispatch) => {
  dispatch(fetchFakeAboveAPI());
  try {
    const response = await fetchFakeAboveAPI();
    return dispatch(requestAllProducts(response));
  } catch (error) {
    return console.log(error);
  }
};
