'use client'

import { createNote, CreateNoteRequest } from '@/lib/api'
import { useDraftNote } from '@/store/note-store'
import { Category } from '@/types/note'
import { useRouter } from 'next/navigation'
import { ChangeEvent } from 'react'

interface Props {
  categories: Category[]
}

const CreateNoteForm = ({ categories }: Props) => {
  const router = useRouter()
  const { saveNote, note, clearStore } = useDraftNote()
  console.log('note', note)

  const handleSubmit = async (formData: FormData) => {
    const data = Object.fromEntries(formData) as unknown as CreateNoteRequest
    await createNote(data)

    clearStore()

    router.push('/notes')
  }

  const handleBack = () => {
    router.back()
  }

  const createDraft = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.value
    const name = e.target.name

    saveNote({
      [name]: value,
    })
  }
  return (
    <>
      <button onClick={handleBack}>Back</button>
      <form action={handleSubmit}>
        <label>
          Title
          <br />
          <input type='text' name='title' onChange={createDraft} value={note?.title ?? ''} />
        </label>
        <br />
        <label>
          Content
          <br />
          <textarea name='content' onChange={createDraft} value={note?.content ?? ''} />
        </label>
        <br />
        <label>
          Category
          <br />
          <select name='categoryId' onChange={createDraft} value={note?.categoryId ?? ''}>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type='submit'>Create</button>
      </form>
    </>
  )
}

export default CreateNoteForm
