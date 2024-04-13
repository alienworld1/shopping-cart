const cart = new Map();

const incrementProduct = id => {
  if (!cart.has(id)) {
    cart.set(id, 1);
  } else {
    cart.set(id, cart.get(id) + 1);
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

export { incrementProduct, decrementProduct, checkIfPossibleToDecrement, getCountOfProduct};