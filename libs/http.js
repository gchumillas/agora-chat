import axios from 'axios'
import Cookies from 'js-cookie'

const http = axios.create({ baseURL: process.env.API_URL })

http.interceptors.request.use((config) => {
  const token = Cookies.get('token')
  return {
    ...config,
    ...(token && {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
})

export default http