import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export async function getServerSession() {
  return await auth()
}

export async function requireAuth() {
  const session = await auth()
  
  if (!session?.user) {
    redirect('/auth/login')
  }
  
  return session
}

export async function requireAdmin() {
  const session = await requireAuth()
  
  if (session.user.role !== 'ADMIN') {
    redirect('/auth/unauthorized')
  }
  
  return session
}

export async function requireVerifiedUser() {
  const session = await requireAuth()
  
  // Check if user is verified in database
  const { prisma } = await import('@/lib/prisma')
  const user = await prisma.user.findUnique({
    where: { email: session.user.email! },
    select: { isVerified: true, isActive: true }
  })

  if (!user?.isVerified) {
    redirect('/auth/verification-pending')
  }

  if (!user?.isActive) {
    redirect('/auth/account-inactive')
  }
  
  return session
}
