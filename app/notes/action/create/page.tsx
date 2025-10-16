import CreateNoteForm from '@/components/CreateNoteForm/CreateNoteForm'
import { getCategories } from '@/lib/clientApi'

const CreateNote = async () => {
  const categories = await getCategories()
  return <CreateNoteForm categories={categories} />
}

export default CreateNote
