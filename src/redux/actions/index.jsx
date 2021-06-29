import { setOnCart, updateCartCounter } from './cart';
import { requestProductsBellowTen, requestProductsAboveTen } from './products';
import {
  fetchFakeBellowAPI,
  fetchFakeAboveAPI,
} from '../../services/requestAPI/fakeAPI';

export {
  setOnCart,
  updateCartCounter,
  requestProductsBellowTen,
  requestProductsAboveTen,
};

export const requestFakeBellowAPI = () => async (dispatch) => {
  dispatch(fetchFakeBellowAPI());
  try {
    const response = await fetchFakeBellowAPI();
    return dispatch(requestProductsBellowTen(response));
  } catch (error) {
    return console.log(error);
  }
};

export const requestFakeAboveAPI = () => async (dispatch) => {
  dispatch(fetchFakeAboveAPI());
  try {
    const response = await fetchFakeAboveAPI();
    return dispatch(requestProductsAboveTen(response));
  } catch (error) {
    return console.log(error);
  }
};
