import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// Define role-based access patterns
const roleAccess = {
  '/admin': ['ADMIN'],
  '/dashboard/admin': ['ADMIN'],
  '/dashboard/profile': ['AFRICAN_CONSULTANT', 'EXPATRIATE_CONSULTANT', 'PARTNER', 'STUDENT', 'ADMIN'],
  '/dashboard/consultant': ['AFRICAN_CONSULTANT', 'EXPATRIATE_CONSULTANT', 'ADMIN'],
  '/dashboard/partner': ['PARTNER', 'ADMIN'],
  '/dashboard/student': ['STUDENT', 'ADMIN'],
  '/training': ['AFRICAN_CONSULTANT', 'EXPATRIATE_CONSULTANT', 'PARTNER', 'STUDENT', 'ADMIN'],
  '/geoportal': ['AFRICAN_CONSULTANT', 'EXPATRIATE_CONSULTANT', 'PARTNER', 'ADMIN'],
  '/dashboard': ['AFRICAN_CONSULTANT', 'EXPATRIATE_CONSULTANT', 'PARTNER', 'STUDENT', 'ADMIN'],
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path requires authentication
  const requiresAuth = Object.keys(roleAccess).some(path => pathname.startsWith(path))
  
  if (!requiresAuth) {
    return NextResponse.next()
  }

  // Get the session
  const session = await auth()

  // Redirect to login if not authenticated
  if (!session?.user) {
    const loginUrl = new URL('/auth/login', request.url)
    loginUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Check if user is verified (for all protected routes except login/register)
  if (pathname !== '/auth/login' && pathname !== '/auth/register') {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email! },
      select: { isVerified: true, isActive: true }
    })

    if (!user?.isVerified) {
      const verificationUrl = new URL('/auth/verification-pending', request.url)
      return NextResponse.redirect(verificationUrl)
    }

    if (!user?.isActive) {
      const inactiveUrl = new URL('/auth/account-inactive', request.url)
      return NextResponse.redirect(inactiveUrl)
    }
  }

  // Check role-based access
  for (const [path, allowedRoles] of Object.entries(roleAccess)) {
    if (pathname.startsWith(path)) {
      if (!allowedRoles.includes(session.user.role as any)) {
        const unauthorizedUrl = new URL('/auth/unauthorized', request.url)
        return NextResponse.redirect(unauthorizedUrl)
      }
      break
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/dashboard/:path*',
    '/training/:path*',
    '/geoportal/:path*',
  ]
}
