export const SET_ON_CART = 'SET_ON_CART';
export const setOnCart = (cart) => ({
  type: SET_ON_CART,
  cart,
});

export const UPDATE_CART_COUNTER = 'UPDATE_CART_COUNTER';
export const updateCartCounter = (counter) => ({
  type: UPDATE_CART_COUNTER,
  counter,
});
