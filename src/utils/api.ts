import axios from 'axios'

const baseURL = process.env.API_BASE_URL
const staticURL = process.env.API_STATIC_URL

const apiPublic = axios.create({
  baseURL,
})
const apiProtected = axios.create({
  baseURL,
})

apiProtected.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = token
  return config
})

export { baseURL, staticURL, apiPublic, apiProtected }
