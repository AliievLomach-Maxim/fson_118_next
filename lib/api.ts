import { Category, Note, NoteMeta } from '@/types/note'
import axios from 'axios'

axios.defaults.baseURL = 'https://next-docs-9f0504b0a741.herokuapp.com'

interface NotesResponse {
  notes: Note[]
  total: number
}

interface NotesRequest {
  categoryId?: string
  title?: string
}

export const getNotes = async (params?: NotesRequest) => {
  const { data } = await axios.get<NotesResponse>('/notes', {
    params,
  })
  return data.notes
}

export const getSingleNote = async (id: string) => {
  const { data } = await axios.get<Note>(`/notes/${id}`)
  return data
}

export const getMetaForNote = async (id: string) => {
  const { data } = await axios.get<NoteMeta>(`/notes/meta/${id}`)
  return data
}

export const getCategories = async () => {
  const { data } = await axios.get<Category[]>(`/categories`)
  return data
}
