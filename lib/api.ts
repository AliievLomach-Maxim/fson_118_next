import axios from 'axios'

// axios.defaults.baseURL = 'https://next-docs-9f0504b0a741.herokuapp.com'
// axios.defaults.baseURL = 'http://localhost:3000/api'
export const nextServerApi = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
})

export interface SessionResponse {
  success: boolean
}
