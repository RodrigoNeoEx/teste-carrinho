export const REQUEST_PRODUCTS_BELLOW_TEN = 'REQUEST_PRODUCTS_BELLOW_TEN';
export const requestProductsBellowTen = (productsBellowTen) => ({
  type: REQUEST_PRODUCTS_BELLOW_TEN,
  productsBellowTen,
});

export const REQUEST_PRODUCTS_ABOVE_TEN = 'REQUEST_PRODUCTS_ABOVE_TEN';
export const requestProductsAboveTen = (productsAboveTen) => ({
  type: REQUEST_PRODUCTS_ABOVE_TEN,
  productsAboveTen,
});

