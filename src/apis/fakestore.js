import { useState, useEffect } from "react";

const fetchItemById = async number => {
  const response = await fetch(`https://fakestoreapi.com/products/${number}`);
  if (!response.ok) {
    throw new Error('Server Error');
  }
  return await response.json();
}

const useFakeItem = id => {
  const [item, setItem] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const fetchFakeItem = async () => {
      try {
        const fakeItem = await fetchItemById(id);
        setItem(fakeItem);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchFakeItem();
  }, [id])

  return {item, error, loading};
}

export { fetchItemById as fetchItems, useFakeItem };