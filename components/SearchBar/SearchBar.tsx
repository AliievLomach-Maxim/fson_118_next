'use client'

import { useParams, useRouter } from 'next/navigation'

const SearchBar = () => {
  const {
    filters: [categoryId],
  } = useParams<{ filters: string[] }>()
  console.log('categoryId', categoryId)

  const router = useRouter()

  const handleSubmit = (formData: FormData) => {
    const searchValue = formData.get('searchValue')

    router.push(`/notes/filter/${categoryId}/${searchValue}`)
  }

  return (
    <form action={handleSubmit}>
      <input type='text' name='searchValue' />
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchBar
