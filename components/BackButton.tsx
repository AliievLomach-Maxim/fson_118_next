'use client'

import { useRouter } from 'next/navigation'

const BackButton = () => {
  const router = useRouter()
  const handleClick = () => {
    router.back()
  }
  return <button onClick={handleClick}>Close</button>
}

export default BackButton
