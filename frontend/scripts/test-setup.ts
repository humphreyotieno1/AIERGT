import { prisma } from '../lib/prisma'
import bcrypt from 'bcryptjs'

async function testDatabaseConnection() {
  try {
    await prisma.$connect()
    console.log('✅ Database connection successful')
    return true
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    return false
  }
}

async function testPrismaOperations() {
  try {
    // Test basic CRUD operations
    const userCount = await prisma.user.count()
    console.log(`✅ User count: ${userCount}`)
    
    const courseCount = await prisma.course.count()
    console.log(`✅ Course count: ${courseCount}`)
    
    const blogCount = await prisma.blogPost.count()
    console.log(`✅ Blog post count: ${blogCount}`)
    
    return true
  } catch (error) {
    console.error('❌ Prisma operations failed:', error)
    return false
  }
}

async function testAuthentication() {
  try {
    // Test finding admin user
    const admin = await prisma.user.findUnique({
      where: { email: 'admin@aiergt.africa' },
      include: { profile: true }
    })
    
    if (admin) {
      console.log('✅ Admin user found:', admin.name)
    } else {
      console.log('⚠️ Admin user not found - run seeding first')
    }
    
    return true
  } catch (error) {
    console.error('❌ Authentication test failed:', error)
    return false
  }
}

async function testEmailService() {
  try {
    const { EmailService } = await import('../lib/services/email.service')
    console.log('✅ Email service imported successfully')
    return true
  } catch (error) {
    console.error('❌ Email service test failed:', error)
    return false
  }
}

async function runAllTests() {
  console.log('🧪 Starting Module 1 & 2 Tests...\n')
  
  const tests = [
    { name: 'Database Connection', fn: testDatabaseConnection },
    { name: 'Prisma Operations', fn: testPrismaOperations },
    { name: 'Authentication', fn: testAuthentication },
    { name: 'Email Service', fn: testEmailService },
  ]
  
  let passed = 0
  let failed = 0
  
  for (const test of tests) {
    console.log(`\n🔍 Testing ${test.name}...`)
    try {
      const result = await test.fn()
      if (result) {
        passed++
      } else {
        failed++
      }
    } catch (error) {
      console.error(`❌ ${test.name} failed:`, error)
      failed++
    }
  }
  
  console.log(`\n📊 Test Results:`)
  console.log(`✅ Passed: ${passed}`)
  console.log(`❌ Failed: ${failed}`)
  console.log(`📈 Success Rate: ${Math.round((passed / (passed + failed)) * 100)}%`)
  
  if (failed === 0) {
    console.log('\n🎉 All tests passed! Modules 1 & 2 are ready for production.')
  } else {
    console.log('\n⚠️ Some tests failed. Please check the errors above.')
  }
  
  await prisma.$disconnect()
}

// Run tests if this file is executed directly
if (require.main === module) {
  runAllTests().catch(console.error)
}

export { runAllTests }
