'use client'

import { checkSession, getMe } from '@/lib/clientApi'
import { useAuth } from '@/store/auth-store'
import { useEffect } from 'react'

interface Props {
  children: React.ReactNode
}

const AuthProvider = ({ children }: Props) => {
  const setUser = useAuth((state) => state.setUser)
  const clearAuth = useAuth((state) => state.clearAuth)

  useEffect(() => {
    const fetchAuth = async () => {
      const isAuth = await checkSession()
      if (isAuth) {
        const user = await getMe()
        if (user) {
          setUser(user)
        }
      } else clearAuth()
    }
    fetchAuth()
  }, [clearAuth, setUser])

  return children
}

export default AuthProvider
