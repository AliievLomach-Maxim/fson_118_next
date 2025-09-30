import { Category, Note } from '@/types/note'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/'

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

export const getCategories = async () => {
  const { data } = await axios.get<Category[]>(`/categories`)
  return data
}
