import { PrismaClient, UserRole, CourseLevel, ProjectStatus, ConfigType } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create admin user
  const adminHashedPassword = await bcrypt.hash('admin123', 12)
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@aiergt.africa' },
    update: {},
    create: {
      email: 'admin@aiergt.africa',
      name: 'AIERGT Admin',
      password: adminHashedPassword,
      phone: '+254 700 123 456',
      organization: 'AIERGT',
      role: UserRole.ADMIN,
      isVerified: true,
      isActive: true,
      emailVerified: new Date(),
      profile: {
        create: {
          bio: 'System Administrator for AIERGT',
          location: 'Nairobi, Kenya',
          website: 'https://aiergt.africa',
          language: 'en',
          timezone: 'Africa/Nairobi',
        }
      }
    },
  })

  // Create test users for different roles
  const testUsers = [
    {
      email: 'consultant@aiergt.africa',
      name: 'Test Consultant',
      password: 'consultant123',
      phone: '+234 800 123 456',
      organization: 'Environmental Solutions Ltd',
      role: UserRole.AFRICAN_CONSULTANT,
      bio: 'Environmental consultant specializing in sustainable development'
    },
    {
      email: 'partner@aiergt.africa',
      name: 'Test Partner',
      password: 'partner123',
      phone: '+27 11 123 456',
      organization: 'African Environmental Institute',
      role: UserRole.PARTNER,
      bio: 'Partner organization focused on environmental research'
    },
    {
      email: 'student@aiergt.africa',
      name: 'Test Student',
      password: 'student123',
      phone: '+254 700 987 654',
      organization: 'University of Nairobi',
      role: UserRole.STUDENT,
      bio: 'Graduate student in Environmental Science'
    }
  ]

  for (const userData of testUsers) {
    const hashedPassword = await bcrypt.hash(userData.password, 12)
    
    await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: {
        email: userData.email,
        name: userData.name,
        password: hashedPassword,
        phone: userData.phone,
        organization: userData.organization,
        role: userData.role,
        isVerified: true,
        isActive: true,
        emailVerified: new Date(),
        profile: {
          create: {
            bio: userData.bio,
            language: 'en',
            timezone: 'Africa/Nairobi',
          }
        }
      },
    })
  }

  // Create sample courses
  const sampleCourses = [
    {
      title: 'Introduction to Environmental Assessment',
      description: 'Learn the fundamentals of environmental impact assessment and sustainable development practices.',
      slug: 'intro-environmental-assessment',
      duration: 40,
      level: CourseLevel.BEGINNER,
      category: 'Environmental Assessment',
      tags: ['environment', 'assessment', 'sustainability'],
      instructorId: admin.id,
    },
    {
      title: 'Advanced Geospatial Analysis',
      description: 'Master advanced techniques in GIS, remote sensing, and spatial data analysis.',
      slug: 'advanced-geospatial-analysis',
      duration: 60,
      level: CourseLevel.ADVANCED,
      category: 'Geospatial Technology',
      tags: ['gis', 'remote-sensing', 'spatial-analysis'],
      instructorId: admin.id,
    },
    {
      title: 'Climate Change Adaptation Strategies',
      description: 'Develop strategies for climate change adaptation and resilience building.',
      slug: 'climate-change-adaptation',
      duration: 50,
      level: CourseLevel.INTERMEDIATE,
      category: 'Climate Science',
      tags: ['climate-change', 'adaptation', 'resilience'],
      instructorId: admin.id,
    }
  ]

  for (const courseData of sampleCourses) {
    await prisma.course.upsert({
      where: { slug: courseData.slug },
      update: {},
      create: {
        ...courseData,
        isPublished: true,
        price: 0, // Free courses for now
      },
    })
  }

  // Create sample blog posts
  const samplePosts = [
    {
      title: 'The Future of Environmental Research in Africa',
      slug: 'future-environmental-research-africa',
      excerpt: 'Exploring emerging trends and opportunities in environmental research across the African continent.',
      content: `Environmental research in Africa is entering an exciting new phase. With growing awareness of climate change impacts and the need for sustainable development, researchers across the continent are developing innovative solutions to address environmental challenges.

This article explores the key trends shaping environmental research in Africa and highlights the opportunities for collaboration and innovation.`,
      tags: ['research', 'environment', 'africa', 'sustainability'],
      authorId: admin.id,
      isPublished: true,
      publishedAt: new Date(),
    },
    {
      title: 'Geospatial Technology for Sustainable Development',
      slug: 'geospatial-technology-sustainable-development',
      excerpt: 'How GIS and remote sensing technologies are transforming environmental monitoring and management.',
      content: `Geospatial technologies have revolutionized how we understand and manage our environment. From satellite imagery to real-time monitoring systems, these tools provide unprecedented insights into environmental changes.

In this article, we examine the role of geospatial technology in promoting sustainable development and environmental conservation.`,
      tags: ['gis', 'remote-sensing', 'sustainable-development', 'monitoring'],
      authorId: admin.id,
      isPublished: true,
      publishedAt: new Date(),
    }
  ]

  for (const postData of samplePosts) {
    await prisma.blogPost.upsert({
      where: { slug: postData.slug },
      update: {},
      create: postData,
    })
  }

  // Create sample projects
  const sampleProjects = [
    {
      title: 'East African Environmental Monitoring Network',
      description: 'Establishing a comprehensive environmental monitoring network across East Africa to track climate change impacts and biodiversity changes.',
      slug: 'east-african-monitoring-network',
      status: ProjectStatus.IN_PROGRESS,
      startDate: new Date('2024-01-01'),
      region: 'East Africa',
      country: 'Kenya',
      tags: ['monitoring', 'climate-change', 'biodiversity'],
      leaderId: admin.id,
      isPublic: true,
    },
    {
      title: 'West African Coastal Protection Initiative',
      description: 'Developing coastal protection strategies to mitigate the impacts of sea-level rise and coastal erosion in West African countries.',
      slug: 'west-african-coastal-protection',
      status: ProjectStatus.PLANNING,
      region: 'West Africa',
      country: 'Nigeria',
      tags: ['coastal-protection', 'sea-level-rise', 'adaptation'],
      leaderId: admin.id,
      isPublic: true,
    }
  ]

  for (const projectData of sampleProjects) {
    await prisma.project.upsert({
      where: { slug: projectData.slug },
      update: {},
      create: projectData,
    })
  }

  // Create system configuration
  const systemConfigs = [
    { key: 'site_name', value: 'AIERGT', type: ConfigType.STRING, isPublic: true },
    { key: 'site_description', value: 'African Institute for Environmental Research and Geospatial Technology', type: ConfigType.STRING, isPublic: true },
    { key: 'contact_email', value: 'info@aiergt.africa', type: ConfigType.STRING, isPublic: true },
    { key: 'max_file_upload_size', value: '10485760', type: ConfigType.NUMBER, isPublic: false },
    { key: 'registration_enabled', value: 'true', type: ConfigType.BOOLEAN, isPublic: true },
    { key: 'maintenance_mode', value: 'false', type: ConfigType.BOOLEAN, isPublic: false },
  ]

  for (const config of systemConfigs) {
    await prisma.systemConfig.upsert({
      where: { key: config.key },
      update: {},
      create: config,
    })
  }

  console.log('✅ Database seeding completed successfully!')
  console.log('')
  console.log('🔐 Test User Credentials:')
  console.log('📧 Admin: admin@aiergt.africa | 🔑 admin123')
  console.log('📧 Consultant: consultant@aiergt.africa | 🔑 consultant123')
  console.log('📧 Partner: partner@aiergt.africa | 🔑 partner123')
  console.log('📧 Student: student@aiergt.africa | 🔑 student123')
  console.log('')
  console.log('📊 Created:')
  console.log('   • 4 users (1 admin + 3 test users)')
  console.log('   • 3 sample courses')
  console.log('   • 2 blog posts')
  console.log('   • 2 projects')
  console.log('   • 6 system configurations')
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
