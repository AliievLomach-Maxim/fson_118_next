'use client'

import { register, RegisterRequest } from '@/lib/clientApi'
import { useAuth } from '@/store/auth-store'
import { useRouter } from 'next/navigation'

const Register = () => {
  const { setUser } = useAuth()
  const router = useRouter()
  const handleAction = async (formData: FormData) => {
    const payload = Object.fromEntries(formData) as unknown as RegisterRequest
    const user = await register(payload)
    setUser(user)
    router.replace('/profile')
  }
  return (
    <form action={handleAction}>
      <label>
        User name
        <br />
        <input type='text' name='userName' />
      </label>
      <br />
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
      <button type='submit'>Register</button>
    </form>
  )
}

export default Register
