import { Category, Note, NoteMeta } from '@/types/note'
import { User } from '@/types/user'
import { nextServerApi, SessionResponse } from './api'

interface NotesResponse {
  notes: Note[]
  total: number
}
export interface CreateNoteRequest {
  content: string
  categoryId: string
}

export interface RegisterRequest {
  email: string
  password: string
  username: string
}

export interface LoginRequest {
  email: string
  password: string
}

interface NotesRequest {
  categoryId?: string
  title?: string
}

export const getNotes = async (params?: NotesRequest) => {
  const { data } = await nextServerApi.get<NotesResponse>('/notes', {
    params,
  })
  return data.notes
}

export const getSingleNote = async (id: string) => {
  const { data } = await nextServerApi.get<Note>(`/notes/${id}`)
  return data
}

export const getMetaForNote = async (id: string) => {
  const { data } = await nextServerApi.get<NoteMeta>(`/notes/meta/${id}`)
  return data
}

export const getCategories = async () => {
  const { data } = await nextServerApi.get<Category[]>(`/categories`)
  return data
}

export const createNote = async (body: CreateNoteRequest) => {
  const { data } = await nextServerApi.post<Note>(`/notes`, body)
  return data
}

export const register = async (body: RegisterRequest) => {
  const { data } = await nextServerApi.post<User>(`/auth/register`, body)
  return data
}

export const login = async (body: LoginRequest) => {
  const { data } = await nextServerApi.post<User>(`/auth/login`, body)
  return data
}

export const checkSession = async () => {
  const { data } = await nextServerApi.get<SessionResponse>(`/auth/session`)
  return data.success
}

export const getMe = async () => {
  const { data } = await nextServerApi.get<User>(`/auth/me`)
  return data
}

export const logOut = async () => {
  await nextServerApi.post(`/auth/logout`)
}
