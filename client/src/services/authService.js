import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { email, password },
      { withCredentials: true } // Enable cookies
    );
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || 'Login failed. Please try again.';
    console.error('Login error:', message);
    throw new Error(message);
  }
};

const logout = async () => {
  try {
    await axios.post(
      `${API_URL}/logout`,
      {},
      { withCredentials: true }
    );
  } catch (error) {
    const message = error.response?.data?.message || 'Logout failed. Please try again.';
    console.error('Logout error:', message);
    throw new Error(message);
  }
};

const register = async (userData) => {
  try {
    const response = await axios.post(
      `${API_URL}/register`,
      userData,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || 'Registration failed. Please try again.';
    console.error('Registration error:', message);
    throw new Error(message);
  }
};

const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || 'Failed to fetch user data.';
    console.error('Get current user error:', message);
    return null; // Return null if unable to fetch user
  }
};

// Exporting the auth service object
const authService = {
  login,
  logout,
  register,
  getCurrentUser
};

export default authService;
