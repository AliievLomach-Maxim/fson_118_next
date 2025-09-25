import { Note } from '@/types/note'
import Link from 'next/link'

interface Props {
  item: Note
}
const NoteItem = ({ item }: Props) => {
  return (
    <li>
      <Link href={`/notes/${item.id}`}>
        <h4>{item.title}</h4>
        <p>{item.content}</p>
      </Link>
      <br />
    </li>
  )
}

export default NoteItem
