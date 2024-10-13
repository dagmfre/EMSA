import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL || "http://localhost:5000", 
  withCredentials: true, 
});

export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

export default axiosInstance;
