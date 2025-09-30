import Link from 'next/link'
import css from './Header.module.css'
import { getCategories } from '@/lib/api'

const Header = async () => {
  const categories = await getCategories()
  return (
    <header>
      <nav>
        <ul className={css.nav}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
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
          </li>
          <li>
            <Link href='/profile'>Profile</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <br />
    </header>
  )
}

export default Header
