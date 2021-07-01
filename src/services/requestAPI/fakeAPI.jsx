export async function fetchFakeBellowAPI() {
  const response = await fetch("http://localhost:3001/items");
  const productsBellow = await response.json();
  return productsBellow;
};

export async function fetchFakeAboveAPI() {
  const response = await fetch("http://localhost:3002/items");
  const productsAbove = await response.json();
  return productsAbove;
};
