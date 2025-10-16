import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { checkServerSession } from './lib/serverApi'
import { parse } from 'cookie'

const privateRoutes = ['/profile']
const publicRoutes = ['/login', '/register']

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl

  const isPrivateRoute = privateRoutes.some((el) => el.startsWith(pathname))
  const isPublicRoute = publicRoutes.some((el) => el.startsWith(pathname))

  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  const refreshToken = cookieStore.get('refreshToken')?.value

  if (isPrivateRoute) {
    if (accessToken) {
      return NextResponse.next({ headers: { Cookie: cookieStore.toString() } })
    }
    if (refreshToken) {
      try {
        const apiRes = await checkServerSession()
        const setCookie = apiRes.headers['set-cookie']
        if (setCookie) {
          const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie]
          for (const cookieStr of cookieArray) {
            const parsed = parse(cookieStr)
            const options = {
              expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
              path: parsed.Path,
              maxAge: Number(parsed['Max-Age']),
            }
            if (parsed.accessToken) cookieStore.set('accessToken', parsed.accessToken, options)
            if (parsed.refreshToken) cookieStore.set('refreshToken', parsed.refreshToken, options)
          }
          return NextResponse.next({ headers: { Cookie: cookieStore.toString() } })
        }
        return NextResponse.redirect(new URL('/login', request.nextUrl.origin))
      } catch {
        return NextResponse.redirect(new URL('/login', request.nextUrl.origin))
      }
    }
    return NextResponse.redirect(new URL('/login', request.nextUrl.origin))
  }
  //
  if (isPublicRoute) {
    if (accessToken) {
      return NextResponse.redirect(new URL('/', request.nextUrl.origin))
    }
    if (refreshToken) {
      try {
        const apiRes = await checkServerSession()
        const setCookie = apiRes.headers['set-cookie']
        if (setCookie) {
          const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie]
          for (const cookieStr of cookieArray) {
            const parsed = parse(cookieStr)
            const options = {
              expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
              path: parsed.Path,
              maxAge: Number(parsed['Max-Age']),
            }
            if (parsed.accessToken) cookieStore.set('accessToken', parsed.accessToken, options)
            if (parsed.refreshToken) cookieStore.set('refreshToken', parsed.refreshToken, options)
          }
          return NextResponse.redirect(new URL('/', request.nextUrl.origin))
        }
        return NextResponse.next()
      } catch {
        return NextResponse.next()
      }
    }
    return NextResponse.next()
  }
  return NextResponse.next()
}

export const config = { matcher: ['/profile', '/login', '/register'] }
