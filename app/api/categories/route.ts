import { NextResponse } from 'next/server'
import { api, ApiError } from '../api'

export async function GET() {
  try {
    const { data } = await api.get('/categories')
    return NextResponse.json(data)
  } catch (err) {
    const error = err as ApiError
    return NextResponse.json(
      { error: error.response?.data?.error ?? error.message },
      { status: error.status }
    )
  }
}
