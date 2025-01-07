import axios from 'axios';

const API_URL = 'https://ecommerce-app-backend-v534.onrender.com/api/cart';

// Function to add a product to the cart
const addToCart = async (userId, productId, quantity) => {
    if (quantity <= 0) {
        throw new Error("Quantity must be greater than zero.");
    }
  try {
    const response = await axios.post(`${API_URL}/add`, { userId, productId, quantity });
    return response.data; // Return the response data
  } catch (error) {
    console.error('Add to cart error:', error.response?.data || error.message);
    throw new Error('Failed to add to cart. Please try again.'); // Throw a user-friendly error
  }
};

// Function to get cart items for a specific user
export const getCartItems = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`); // Ensure the URL is correct
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error fetching cart items:', error.response?.data || error.message);
    throw new Error("Error fetching cart items: " + error.message); // Throw a user-friendly error
  }
};

// Exporting the functions
const cartService = {
  addToCart,
  getCartItems,
};

export default cartService; // Default export of the cart service
