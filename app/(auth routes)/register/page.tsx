'use client'

import { register, RegisterRequest } from '@/lib/api'

const Register = () => {
  const handleAction = async (formData: FormData) => {
    const payload = Object.fromEntries(formData) as unknown as RegisterRequest
    const user = await register(payload)
    console.log('user', user)
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
