'use client'

import { logOut } from '@/lib/clientApi'
import { useAuth } from '@/store/auth-store'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const AuthNavigation = () => {
  const { user, isAuth, clearAuth } = useAuth()
  const router = useRouter()
  const handleClick = async () => {
    await logOut()
    clearAuth()
    router.replace('/login')
  }

  return isAuth ? (
    <>
      <p>{user?.userName}</p>
      <button onClick={handleClick}>Logout</button>
    </>
  ) : (
    <>
      <li>
        <Link href='/login'>Login</Link>
      </li>
      <li>
        <Link href='/register'>Register</Link>
      </li>
    </>
  )
}

export default AuthNavigation
