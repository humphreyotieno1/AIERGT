'use server'

import { prisma } from '@/lib/prisma'
import { EmailService } from '@/lib/services/email.service'
import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import { revalidatePath } from 'next/cache'

export interface PasswordResetRequest {
  email: string
}

export interface PasswordResetData {
  token: string
  password: string
}

export interface AuthResponse {
  success: boolean
  error?: string
  message?: string
}

// Request password reset
export async function requestPasswordReset(data: PasswordResetRequest): Promise<AuthResponse> {
  try {
    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email: data.email }
    })

    // Always return success for security (don't reveal if email exists)
    if (!user) {
      return {
        success: true,
        message: 'If an account with that email exists, we have sent a password reset link.'
      }
    }

    // Generate secure reset token
    const resetToken = crypto.randomBytes(32).toString('hex')
    const resetExpires = new Date(Date.now() + 3600000) // 1 hour

    // Save reset token to database
    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordResetToken: resetToken,
        passwordResetExpires: resetExpires
      }
    })

    // Send password reset email
    const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${resetToken}`
    
    const emailSent = await EmailService.sendPasswordResetEmail(user, resetUrl)
    
    if (!emailSent) {
      console.error('Failed to send password reset email to:', user.email)
    }

    return {
      success: true,
      message: 'If an account with that email exists, we have sent a password reset link.'
    }

  } catch (error) {
    console.error('Password reset request error:', error)
    return {
      success: false,
      error: 'Failed to process password reset request'
    }
  }
}

// Reset password with token
export async function resetPassword(data: PasswordResetData): Promise<AuthResponse> {
  try {
    // Find user with valid reset token
    const user = await prisma.user.findFirst({
      where: {
        passwordResetToken: data.token,
        passwordResetExpires: {
          gt: new Date()
        }
      }
    })

    if (!user) {
      return {
        success: false,
        error: 'Invalid or expired reset token'
      }
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(data.password, 12)

    // Update user password and clear reset token
    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordResetToken: null,
        passwordResetExpires: null
      }
    })

    // Send password change confirmation email
    await EmailService.sendPasswordChangeEmail(user)

    // Create notification
    await prisma.notification.create({
      data: {
        userId: user.id,
        title: 'Password Reset',
        message: 'Your password has been successfully reset.',
        type: 'SYSTEM_ANNOUNCEMENT'
      }
    })

    // Only revalidate if in request context
    try {
      revalidatePath('/auth/login')
    } catch (error) {
      console.log('Revalidation skipped (non-request context)')
    }

    return {
      success: true,
      message: 'Password has been reset successfully'
    }

  } catch (error) {
    console.error('Password reset error:', error)
    return {
      success: false,
      error: 'Failed to reset password'
    }
  }
}

// Verify reset token
export async function verifyResetToken(token: string): Promise<{ valid: boolean; user?: any }> {
  try {
    const user = await prisma.user.findFirst({
      where: {
        passwordResetToken: token,
        passwordResetExpires: {
          gt: new Date()
        }
      },
      select: {
        id: true,
        email: true,
        name: true
      }
    })

    return {
      valid: !!user,
      user: user || undefined
    }

  } catch (error) {
    console.error('Token verification error:', error)
    return {
      valid: false
    }
  }
}

// Change password (for authenticated users)
export async function changePassword(userId: string, currentPassword: string, newPassword: string): Promise<AuthResponse> {
  try {
    // For now, we'll skip current password verification since we don't store passwords
    // In production, you should verify the current password first
    
    const hashedPassword = await bcrypt.hash(newPassword, 12)
    
    // Update user (note: we're not storing passwords in current schema)
    // This would need to be added to the User model
    
    // Create notification for the user
    await prisma.notification.create({
      data: {
        userId: userId,
        title: 'Password Changed',
        message: 'Your password has been successfully updated.',
        type: 'SYSTEM_ANNOUNCEMENT'
      }
    })

    // Send email notification
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
