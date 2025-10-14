'use client'

import { login, LoginRequest } from '@/lib/api'

const Login = () => {
  const handleAction = async (formData: FormData) => {
    const payload = Object.fromEntries(formData) as unknown as LoginRequest
    const user = await login(payload)
    console.log('user', user)
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
