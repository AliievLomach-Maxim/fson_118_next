'use client'

import { login, LoginRequest } from '@/lib/clientApi'
import { useAuth } from '@/store/auth-store'
import { useRouter } from 'next/navigation'

const Login = () => {
  const { setUser } = useAuth()
  const router = useRouter()
  const handleAction = async (formData: FormData) => {
    const payload = Object.fromEntries(formData) as unknown as LoginRequest
    const user = await login(payload)
    setUser(user)
    router.replace('/profile')
  }
  return (
    <form action={handleAction}>
      <label>
        Email
        <br />
        <input type='email' name='email' />
      </label>
      <br />
      <label>
        Password
        <br />
        <input type='password' name='password' />
      </label>
      <br />
      <br />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login
