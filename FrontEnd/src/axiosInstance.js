
// axiosInstance.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api', // Set your backend API base URL
  timeout: 5000, // Set the request timeout (optional)
  headers: {
    'Content-Type': 'application/json',
    // Add any custom headers you need
  }
});

export default instance;
