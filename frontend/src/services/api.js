import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})
