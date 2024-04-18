const cart = new Map();
const productIdMap = new Map();

const incrementProduct = product => {
  if (!cart.has(product.id)) {
    cart.set(product.id, 1);
    productIdMap.set(product.id, product);
  } else {
    cart.set(product.id, cart.get(product.id) + 1);
  }
};

const decrementProduct = id => {
  cart.set(id, cart.get(id) - 1);
}

const checkIfPossibleToDecrement = id => (
  cart.has(id) && cart.get(id) !== 0
);

const getCountOfProduct = id => (
  cart.has(id) ? cart.get(id) : 0
)

const cartInfo = {
  size: () => cart.size,
  products: () => Array.from(cart.entries()),
  productFromId: id => productIdMap.get(id),
}

export { incrementProduct, decrementProduct, checkIfPossibleToDecrement, getCountOfProduct, cartInfo, productIdMap};