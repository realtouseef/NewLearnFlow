import axios from 'axios';

// Create an axios instance with base URL and default headers
const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1', // Your MongoDB/Express API base URL
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true // Include cookies in requests (important for authentication)
});

// Request interceptor to add authorization token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response || {};
    
    if (status === 401) {
      // Handle unauthorized - maybe redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    } else if (status === 500) {
      console.error('Server error:', error.response?.data);
    }
    
    return Promise.reject(error);
  }
);

export default api;
