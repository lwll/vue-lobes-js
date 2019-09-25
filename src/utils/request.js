import axios from 'axios'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 50000
})

service.interceptors.request.use((config) => {
  if (getToken()) {
    config.headers['X-Lobes-Token'] = getToken()
  }
  return config
})

service.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})

export default service
