import NoteList from '@/components/NoteList/NoteList'
import SearchBar from '@/components/SearchBar/SearchBar'
import { getNotes } from '@/lib/api'

interface Props {
  params: Promise<{ filters: string[] }>
}
const FiltersPage = async ({ params }: Props) => {
  const { filters } = await params
  const [categoryId, searchValue] = filters
  const requestParams = {
    categoryId: categoryId === 'all' ? undefined : categoryId,
    title: searchValue,
  }
  const notes = await getNotes(requestParams)

  return (
    <div>
      <SearchBar />
      <h1>notes list</h1>
      {notes?.length > 0 && <NoteList items={notes} />}
    </div>
  )
}

export default FiltersPage
