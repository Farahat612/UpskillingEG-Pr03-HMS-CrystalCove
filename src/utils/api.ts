import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL as string;
const staticURL = import.meta.env.VITE_API_STATIC_URL as string;

const apiPublic = axios.create({
  baseURL,
});
const apiProtected = axios.create({
  baseURL,
});

apiProtected.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token;
  return config;
});

export { baseURL, staticURL, apiPublic, apiProtected };
