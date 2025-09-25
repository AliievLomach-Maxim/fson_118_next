import { Note } from '@/types/note'
import NoteItem from '../NoteItem/NoteItem'

interface Props {
  items: Note[]
}

const NoteList = ({ items }: Props) => {
  return (
    <ul>
      {items.map((item) => (
        <NoteItem item={item} key={item.id} />
      ))}
    </ul>
  )
}

export default NoteList
