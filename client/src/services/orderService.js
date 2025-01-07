import axios from 'axios';

export const addToCart = async (product) => {
  try {
    const response = await axios.post("/api/cart", product);
    return response.data;
  } catch (error) {
    throw new Error("Error adding to cart: " + error.message);
  }
};

export const getCartItems = async (userId) => {
  try {
    const response = await axios.get(`/api/cart/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching cart items: " + error.message);
  }
};
