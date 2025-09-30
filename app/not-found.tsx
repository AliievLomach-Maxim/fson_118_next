import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <h3>Not found page</h3>
      <Link href='/'>Go to Home</Link>
    </div>
  )
}

export default NotFoundPage
