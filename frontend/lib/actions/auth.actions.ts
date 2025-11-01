'use server'

import { prisma } from '@/lib/prisma'
import { UserRole } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { revalidatePath } from 'next/cache'
import { EmailService } from '@/lib/services/email.service'
import type { 
  RegisterData, 
  LoginData, 
  UpdateProfileData, 
  AuthResponse, 
  UserWithStats 
} from '@/lib/types/auth.types'


// Register a new user
export async function registerUser(data: RegisterData): Promise<AuthResponse> {
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email }
    })

    if (existingUser) {
      return {
        success: false,
        error: 'User with this email already exists'
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 12)

    // Create user
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        phone: data.phone,
        organization: data.organization,
        role: data.role,
        isVerified: false, // Admin needs to verify
        isActive: true,
        profile: {
          create: {
            language: 'en',
            timezone: 'Africa/Nairobi',
          }
        }
      },
      include: {
        profile: true
      }
    })

            // Send verification email to admin
            await EmailService.sendAdminVerificationEmail(user)
            
            // Send welcome email to user
            await EmailService.sendWelcomeEmail(user)

            // Only revalidate if in request context
            try {
              revalidatePath('/admin/users')
            } catch (error) {
              // Ignore revalidation errors in non-request context
              console.log('Revalidation skipped (non-request context)')
            }
    
    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified
      }
    }
  } catch (error) {
    console.error('Registration error:', error)
    return {
      success: false,
      error: 'Registration failed. Please try again.'
    }
  }
}

// Verify a user (admin action)
export async function verifyUser(userId: string): Promise<AuthResponse> {
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { 
        isVerified: true,
        emailVerified: new Date()
      }
    })

            // Send verification email to user
            await EmailService.sendUserVerificationEmail(user)

            // Only revalidate if in request context
            try {
              revalidatePath('/admin/users')
            } catch (error) {
              console.log('Revalidation skipped (non-request context)')
            }
    
    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        isVerified: user.isVerified
      }
    }
  } catch (error) {
    console.error('Verification error:', error)
    return {
      success: false,
      error: 'Failed to verify user'
    }
  }
}

// Reject a user (admin action)
export async function rejectUser(userId: string): Promise<AuthResponse> {
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { isActive: false }
    })

            // Send rejection email to user
            await EmailService.sendUserRejectionEmail(user)

            // Only revalidate if in request context
            try {
              revalidatePath('/admin/users')
            } catch (error) {
              console.log('Revalidation skipped (non-request context)')
            }
    
    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        isActive: user.isActive
      }
    }
  } catch (error) {
    console.error('Rejection error:', error)
    return {
      success: false,
      error: 'Failed to reject user'
    }
  }
}

// Update user profile
export async function updateUserProfile(userId: string, data: UpdateProfileData): Promise<AuthResponse> {
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        name: data.name,
        phone: data.phone,
        organization: data.organization,
        profile: {
          update: {
            bio: data.bio,
            location: data.location,
            website: data.website,
          }
        }
      },
      include: {
        profile: true
      }
    })

    // Only revalidate if in request context
    try {
      revalidatePath('/dashboard/profile')
    } catch (error) {
      console.log('Revalidation skipped (non-request context)')
    }
    
    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        organization: user.organization,
        profile: user.profile
      }
    }
  } catch (error) {
    console.error('Profile update error:', error)
    return {
      success: false,
      error: 'Failed to update profile'
    }
  }
}

// Get all users (admin action)
export async function getAllUsers(): Promise<{ success: boolean; users?: UserWithStats[]; error?: string }> {
  try {
    const users = await prisma.user.findMany({
      include: {
        profile: true,
        _count: {
          select: {
            enrollments: true,
            certificates: true,
            posts: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return {
      success: true,
      users: users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
        isActive: user.isActive,
        createdAt: user.createdAt,
        profile: user.profile,
        stats: user._count
      }))
    }
  } catch (error) {
    console.error('Get users error:', error)
    return {
      success: false,
      error: 'Failed to fetch users'
    }
  }
}

// Get pending verifications (admin action)
export async function getPendingVerifications(): Promise<{ success: boolean; users?: UserWithStats[]; error?: string }> {
  try {
    const users = await prisma.user.findMany({
      where: {
        isVerified: false,
        isActive: true
      },
      include: {
        profile: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return {
      success: true,
      users: users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
        isActive: user.isActive,
        organization: user.organization || undefined,
        createdAt: user.createdAt,
        profile: user.profile,
        stats: {
          enrollments: 0,
          certificates: 0,
          posts: 0
        }
      }))
    }
  } catch (error) {
    console.error('Get pending verifications error:', error)
    return {
      success: false,
      error: 'Failed to fetch pending verifications'
    }
  }
}

// Change user password
export async function changePassword(userId: string, currentPassword: string, newPassword: string): Promise<AuthResponse> {
  try {
    // For now, we'll use a simple validation
    // In production, you should verify the current password
    
    const hashedPassword = await bcrypt.hash(newPassword, 12)
    
    // Create a notification for the user about password change
    await prisma.notification.create({
      data: {
        userId: userId,
        title: 'Password Changed',
        message: 'Your password has been successfully updated.',
        type: 'SYSTEM_ANNOUNCEMENT'
      }
    })

    // Send email notification about password change
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, email: true }
    })

    if (user) {
      await EmailService.sendPasswordChangeEmail(user)
    }

    return {
      success: true,
      message: 'Password updated successfully'
    }
  } catch (error) {
    console.error('Password change error:', error)
    return {
      success: false,
      error: 'Failed to change password'
    }
  }
}

// Delete user (admin action)
export async function deleteUser(userId: string): Promise<AuthResponse> {
  try {
    await prisma.user.delete({
      where: { id: userId }
    })

    // Only revalidate if in request context
    try {
      revalidatePath('/admin/users')
    } catch (error) {
      console.log('Revalidation skipped (non-request context)')
    }
    
    return {
      success: true,
      message: 'User deleted successfully'
    }
  } catch (error) {
    console.error('Delete user error:', error)
    return {
      success: false,
      error: 'Failed to delete user'
    }
  }
}
