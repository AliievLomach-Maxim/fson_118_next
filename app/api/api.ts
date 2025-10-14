import axios, { AxiosError } from 'axios'

export type ApiError = AxiosError<{ error: string }>

export const api = axios.create({
  baseURL: 'https://next-docs-9f0504b0a741.herokuapp.com',
  withCredentials: true,
})
