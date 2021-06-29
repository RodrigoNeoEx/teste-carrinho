const fakeTimer = 900;

export async function fetchFakeBellowAPI() {
  const response = setTimeout(() => {fetch("../data/abaixo-10-reais.json")}, fakeTimer);
  const productsBellowTen = await response.json();
  return productsBellowTen;
};

export async function fetchFakeAboveAPI() {
  const response = setTimeout(() => {fetch("../data/acima-10-reais.json")}, fakeTimer);
  const productsAboveTen = await response.json();
  return productsAboveTen;
};