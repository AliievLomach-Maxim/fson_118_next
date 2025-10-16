import { NextResponse } from 'next/server'
import { api, ApiError } from '../../api'
import { cookies } from 'next/headers'

export async function POST() {
  const cookieStore = await cookies()
  try {
    await api.post('/auth/logout', {}, { headers: { Cookie: cookieStore.toString() } })

    cookieStore.delete('accessToken')
    cookieStore.delete('refreshToken')
    return NextResponse.json({})
  } catch (err) {
    const error = err as ApiError
    return NextResponse.json(
      { error: error.response?.data?.error ?? error.message },
      { status: error.status }
    )
  }
}
