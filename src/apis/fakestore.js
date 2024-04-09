const fetchItems = async number => {
  const response = await fetch(`https://fakestoreapi.com/products?limit=${number}`);
  if (!response.ok) {
    throw new Error('Server Error');
  }
  return await response.json();
}

export { fetchItems };