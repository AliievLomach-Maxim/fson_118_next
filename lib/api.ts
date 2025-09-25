import { Note } from '@/types/note'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/'

interface NotesResponse {
  notes: Note[]
  total: number
}

export const getNotes = async () => {
  const { data } = await axios.get<NotesResponse>('/notes')
  return data.notes
}

export const getSingleNote = async (id: string) => {
  console.log('getSingleNote')
  const { data } = await axios.get<Note>(`/notes/${id}`)
  return data
}
