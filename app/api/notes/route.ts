import { NextRequest, NextResponse } from 'next/server'
import { api, ApiError } from '../api'

export async function GET(request: NextRequest) {
  const categoryId = request.nextUrl.searchParams.get('categoryId')
  const title = request.nextUrl.searchParams.get('title')

  try {
    const { data } = await api.get('/notes', {
      params: { categoryId, title },
    })
    return NextResponse.json(data)
  } catch (err) {
    const error = err as ApiError
    return NextResponse.json(
      { error: error.response?.data?.error ?? error.message },
      { status: error.status }
    )
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  try {
    const { data } = await api.post(`/notes`, body)
    return NextResponse.json(data)
  } catch (err) {
    const error = err as ApiError
    return NextResponse.json(
      { error: error.response?.data?.error ?? error.message },
      { status: error.status }
    )
  }
}
