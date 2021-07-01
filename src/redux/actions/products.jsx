export const REQUEST_ALL_PRODUCTS = 'REQUEST_ALL_PRODUCTS';
export const requestAllProducts = (allProducts) => ({
  type: REQUEST_ALL_PRODUCTS,
  allProducts,
});

export const PRODUCTS_BELLOW = 'PRODUCTS_BELLOW';
export const productsBellow = (products) => ({
  type: PRODUCTS_BELLOW,
  products,
});

export const PRODUCTS_ABOVE = 'PRODUCTS_ABOVE';
export const productsAbove = (products) => ({
  type: PRODUCTS_ABOVE,
  products,
});