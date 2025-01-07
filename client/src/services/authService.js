import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password
    }, {
      withCredentials: true // Enable cookies
    });
    
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 
      'Login failed. Please try again.'
    );
  }
};

const logout = async () => {
  try {
    await axios.post(`${API_URL}/logout`, {}, {
      withCredentials: true
    });
  } catch (error) {
    console.error('Logout error:', error);
  }
};

const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 
      'Registration failed. Please try again.'
    );
  }
};

const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('Get current user error:', error);
    return null;
  }
};

const authService = {
  login,
  logout,
  register,
  getCurrentUser
};

export default authService;
