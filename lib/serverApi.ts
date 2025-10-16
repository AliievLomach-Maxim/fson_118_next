// private SSR requests

import { User } from '@/types/user'
import { nextServerApi, SessionResponse } from './api'
import { cookies } from 'next/headers'

export const getServerMe = async () => {
  const cookieStore = await cookies()
  const { data } = await nextServerApi.get<User>(`/auth/me`, {
    headers: { Cookie: cookieStore.toString() },
  })
  return data
}

export const checkServerSession = async () => {
  const cookieStore = await cookies()
  const res = await nextServerApi.get<SessionResponse>(`/auth/session`, {
    headers: { Cookie: cookieStore.toString() },
  })
  return res
}
