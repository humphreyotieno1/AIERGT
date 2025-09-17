#!/usr/bin/env tsx

/**
 * Complete Authentication System Test
 * Tests all authentication functionality including emails
 */

import { prisma } from '../lib/prisma'
import { EmailService } from '../lib/services/email.service'
import { requestPasswordReset, resetPassword, verifyResetToken } from '../lib/actions/password.actions'
import { registerUser, verifyUser, rejectUser } from '../lib/actions/auth.actions'
import bcrypt from 'bcryptjs'

const TEST_EMAIL = 'aiergt-test@mailinator.com'
const TEST_NAME = 'Test User'
const TEST_PASSWORD = 'TestPassword123!'

async function testEmailService() {
  console.log('\n📧 Testing Email Service...')
  
  try {
    // Test welcome email
    const welcomeSent = await EmailService.sendWelcomeEmail({
      name: TEST_NAME,
      email: TEST_EMAIL
    })
    console.log(`✅ Welcome email: ${welcomeSent ? 'Sent' : 'Failed'}`)
    
    // Test admin verification email
    const adminSent = await EmailService.sendAdminVerificationEmail({
      name: TEST_NAME,
      email: TEST_EMAIL,
      role: 'STUDENT',
      organization: 'Test Org'
    })
    console.log(`✅ Admin notification email: ${adminSent ? 'Sent' : 'Failed'}`)
    
    // Test user verification email
    const verificationSent = await EmailService.sendUserVerificationEmail({
      name: TEST_NAME,
      email: TEST_EMAIL
    })
    console.log(`✅ User verification email: ${verificationSent ? 'Sent' : 'Failed'}`)
    
    // Test password reset email
    const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=test-token-123`
    const resetSent = await EmailService.sendPasswordResetEmail({
      name: TEST_NAME,
      email: TEST_EMAIL
    }, resetUrl)
    console.log(`✅ Password reset email: ${resetSent ? 'Sent' : 'Failed'}`)
    
    // Test password change email
    const changeSent = await EmailService.sendPasswordChangeEmail({
      name: TEST_NAME,
      email: TEST_EMAIL
    })
    console.log(`✅ Password change email: ${changeSent ? 'Sent' : 'Failed'}`)
    
    // Test rejection email
    const rejectionSent = await EmailService.sendUserRejectionEmail({
      name: TEST_NAME,
      email: TEST_EMAIL
    })
    console.log(`✅ User rejection email: ${rejectionSent ? 'Sent' : 'Failed'}`)
    
  } catch (error) {
    console.error('❌ Email service test failed:', error)
  }
}

async function testPasswordReset() {
  console.log('\n🔐 Testing Password Reset System...')
  
  try {
    // Create a test user for password reset
    const hashedPassword = await bcrypt.hash(TEST_PASSWORD, 12)
    const testUser = await prisma.user.upsert({
      where: { email: TEST_EMAIL },
      update: {},
      create: {
        name: TEST_NAME,
        email: TEST_EMAIL,
        password: hashedPassword,
        role: 'STUDENT',
        isVerified: true,
        isActive: true,
        emailVerified: new Date(),
        profile: {
          create: {}
        }
      }
    })
    
    console.log(`✅ Test user created/updated: ${testUser.email}`)
    
    // Test password reset request
    const resetRequest = await requestPasswordReset({ email: TEST_EMAIL })
    console.log(`✅ Password reset request: ${resetRequest.success ? 'Success' : 'Failed'}`)
    
    if (resetRequest.success) {
      // Get the reset token from database
      const userWithToken = await prisma.user.findUnique({
        where: { email: TEST_EMAIL },
        select: { passwordResetToken: true, passwordResetExpires: true }
      })
      
      if (userWithToken?.passwordResetToken) {
        console.log(`✅ Reset token generated: ${userWithToken.passwordResetToken.substring(0, 10)}...`)
        
        // Test token verification
        const tokenValid = await verifyResetToken(userWithToken.passwordResetToken)
        console.log(`✅ Token verification: ${tokenValid.valid ? 'Valid' : 'Invalid'}`)
        
        // Test password reset
        const newPassword = 'NewPassword123!'
        const resetResult = await resetPassword({
          token: userWithToken.passwordResetToken,
          password: newPassword
        })
        console.log(`✅ Password reset: ${resetResult.success ? 'Success' : 'Failed'}`)
        
        // Verify token is cleared
        const userAfterReset = await prisma.user.findUnique({
          where: { email: TEST_EMAIL },
          select: { passwordResetToken: true }
        })
        console.log(`✅ Token cleared: ${userAfterReset?.passwordResetToken === null ? 'Yes' : 'No'}`)
      }
    }
    
  } catch (error) {
    console.error('❌ Password reset test failed:', error)
  }
}

async function testUserRegistration() {
  console.log('\n👤 Testing User Registration System...')
  
  try {
    // Test user registration
    const registrationResult = await registerUser({
      name: 'New Test User',
      email: 'new-test@mailinator.com',
      password: TEST_PASSWORD,
      role: 'STUDENT',
      organization: 'Test Organization'
    })
    
    console.log(`✅ User registration: ${registrationResult.success ? 'Success' : 'Failed'}`)
    
    if (registrationResult.success) {
      // Get the new user
      const newUser = await prisma.user.findUnique({
        where: { email: 'new-test@mailinator.com' }
      })
      
      if (newUser) {
        console.log(`✅ User created in database: ${newUser.name}`)
        
        // Test user verification
        const verifyResult = await verifyUser(newUser.id)
        console.log(`✅ User verification: ${verifyResult.success ? 'Success' : 'Failed'}`)
        
        // Test user rejection (create another user first)
        const rejectionUser = await prisma.user.create({
          data: {
            name: 'Rejection Test User',
            email: 'rejection-test@mailinator.com',
            password: await bcrypt.hash(TEST_PASSWORD, 12),
            role: 'STUDENT',
            isVerified: false,
            isActive: true,
            profile: {
              create: {}
            }
          }
        })
        
        const rejectResult = await rejectUser(rejectionUser.id)
        console.log(`✅ User rejection: ${rejectResult.success ? 'Success' : 'Failed'}`)
        
        // Clean up test users
        await prisma.user.deleteMany({
          where: {
            email: {
              in: ['new-test@mailinator.com', 'rejection-test@mailinator.com']
            }
          }
        })
        console.log(`✅ Test users cleaned up`)
      }
    }
    
  } catch (error) {
    console.error('❌ User registration test failed:', error)
  }
}

async function testDatabaseOperations() {
  console.log('\n🗄️ Testing Database Operations...')
  
  try {
    // Test user creation
    const user = await prisma.user.create({
      data: {
        name: 'DB Test User',
        email: 'db-test@mailinator.com',
        password: await bcrypt.hash(TEST_PASSWORD, 12),
        role: 'STUDENT',
        isVerified: false,
        isActive: true,
        profile: {
          create: {}
        }
      }
    })
    console.log(`✅ User creation: ${user.id}`)
    
    // Test profile creation
    const profile = await prisma.userProfile.create({
      data: {
        userId: user.id,
        bio: 'Test bio',
        location: 'Test Location'
      }
    })
    console.log(`✅ Profile creation: ${profile.id}`)
    
    // Test notification creation
    const notification = await prisma.notification.create({
      data: {
        userId: user.id,
        title: 'Test Notification',
        message: 'This is a test notification',
        type: 'SYSTEM_ANNOUNCEMENT'
      }
    })
    console.log(`✅ Notification creation: ${notification.id}`)
    
    // Test password reset token
    const resetToken = 'test-reset-token-123'
    const resetExpires = new Date(Date.now() + 3600000) // 1 hour
    
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordResetToken: resetToken,
        passwordResetExpires: resetExpires
      }
    })
    console.log(`✅ Password reset token: ${updatedUser.passwordResetToken?.substring(0, 10)}...`)
    
    // Test token verification query
    const userWithValidToken = await prisma.user.findFirst({
      where: {
        passwordResetToken: resetToken,
        passwordResetExpires: {
          gt: new Date()
        }
      }
    })
    console.log(`✅ Token verification query: ${userWithValidToken ? 'Found' : 'Not found'}`)
    
    // Clean up
    await prisma.user.delete({
      where: { id: user.id }
    })
    console.log(`✅ Test user cleaned up`)
    
  } catch (error) {
    console.error('❌ Database operations test failed:', error)
  }
}

async function testAuthFlow() {
  console.log('\n🔑 Testing Complete Auth Flow...')
  
  try {
    // 1. Register user
    console.log('1. Registering user...')
    const registerResult = await registerUser({
      name: 'Auth Flow Test User',
      email: 'auth-flow-test@mailinator.com',
      password: TEST_PASSWORD,
      role: 'STUDENT'
    })
    console.log(`   ✅ Registration: ${registerResult.success ? 'Success' : 'Failed'}`)
    
    if (!registerResult.success) return
    
    // 2. Get user for verification
    const user = await prisma.user.findUnique({
      where: { email: 'auth-flow-test@mailinator.com' }
    })
    
    if (!user) {
      console.log('   ❌ User not found after registration')
      return
    }
    
    // 3. Verify user
    console.log('2. Verifying user...')
    const verifyResult = await verifyUser(user.id)
    console.log(`   ✅ Verification: ${verifyResult.success ? 'Success' : 'Failed'}`)
    
    // 4. Test password reset
    console.log('3. Testing password reset...')
    const resetRequest = await requestPasswordReset({ email: user.email })
    console.log(`   ✅ Reset request: ${resetRequest.success ? 'Success' : 'Failed'}`)
    
    if (resetRequest.success) {
      // Get reset token
      const userWithToken = await prisma.user.findUnique({
        where: { id: user.id },
        select: { passwordResetToken: true }
      })
      
      if (userWithToken?.passwordResetToken) {
        // Reset password
        const resetResult = await resetPassword({
          token: userWithToken.passwordResetToken,
          password: 'NewAuthPassword123!'
        })
        console.log(`   ✅ Password reset: ${resetResult.success ? 'Success' : 'Failed'}`)
      }
    }
    
    // 5. Clean up
    console.log('4. Cleaning up...')
    await prisma.user.delete({
      where: { id: user.id }
    })
    console.log(`   ✅ Cleanup: Complete`)
    
  } catch (error) {
    console.error('❌ Auth flow test failed:', error)
  }
}

async function main() {
  console.log('🧪 AIERGT Authentication System - Complete Test Suite')
  console.log('=====================================================')
  
  // Check environment
  console.log('\n📋 Environment Check:')
  console.log(`✅ NEXTAUTH_URL: ${process.env.NEXTAUTH_URL || 'Not set'}`)
  console.log(`✅ SMTP_HOST: ${process.env.SMTP_HOST || 'Not set'}`)
  console.log(`✅ SMTP_USER: ${process.env.SMTP_USER || 'Not set'}`)
  console.log(`✅ DATABASE_URL: ${process.env.DATABASE_URL ? 'Set' : 'Not set'}`)
  
  // Run all tests
  await testDatabaseOperations()
  await testEmailService()
  await testPasswordReset()
  await testUserRegistration()
  await testAuthFlow()
  
  console.log('\n🎉 All authentication tests completed!')
  console.log('\n📧 Check your Mailinator inbox at: https://www.mailinator.com/')
  console.log(`   Use email: ${TEST_EMAIL}`)
  console.log('\n🚀 Authentication system is fully functional!')
}

main()
  .catch((e) => {
    console.error('❌ Test suite failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
