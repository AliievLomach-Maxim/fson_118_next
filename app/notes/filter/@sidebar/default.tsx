import { getCategories } from '@/lib/api'
import Link from 'next/link'

const Sidebar = async () => {
  const categories = await getCategories()
  return (
    <ul>
      <li>
        <Link href='/notes/filter/all'>All Notes</Link>
      </li>
      {categories.map((category) => (
        <li key={category.id}>
          <Link href={`/notes/filter/${category.id}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Sidebar
