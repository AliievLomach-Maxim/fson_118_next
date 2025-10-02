'use client'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const NotFoundPage = () => {
  setTimeout(() => {
    redirect('/')
  }, 1500)
  return (
    <div>
      <h1>404</h1>
      <h3>Not found page</h3>
      <Link href='/'>Go to Home</Link>
    </div>
  )
}

export default NotFoundPage
