import Link from 'next/link'
import css from './Header.module.css'

const Header = async () => {
  return (
    <header>
      <nav>
        <ul className={css.nav}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/notes'>Notes</Link>
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
