import axios from "axios";

const baseURL = "https://upskilling-egypt.com:3000/api/v0";
const staticURL = "https://upskilling-egypt.com:3000";

const apiPublic = axios.create({
  baseURL,
});
const apiProtected = axios.create({
  baseURL,
});

apiProtected.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token;
  return config;
});

export { baseURL, staticURL, apiPublic, apiProtected };
