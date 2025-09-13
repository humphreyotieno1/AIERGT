export interface Portal {
  id: string
  name: string
  type: PortalType
  description: string
  isActive: boolean
  permissions: Permission[]
  features: PortalFeature[]
}

export type PortalType = 'member' | 'geoportal' | 'training' | 'admin'

export interface PortalFeature {
  id: string
  name: string
  description: string
  icon: string
  isEnabled: boolean
  permissions: Permission[]
}

export type Permission = 
  | 'view_profile'
  | 'edit_profile'
  | 'access_courses'
  | 'enroll_courses'
  | 'view_certificates'
  | 'access_maps'
  | 'view_data'
  | 'download_resources'
  | 'manage_users'
  | 'manage_content'
  | 'view_analytics'
  | 'manage_courses'
  | 'verify_users'

export interface Course {
  id: string
  title: string
  description: string
  content: string
  instructor: string
  duration: number // in hours
  level: CourseLevel
  category: CourseCategory
  isPublished: boolean
  enrollmentCount: number
  rating: number
  price: number
  thumbnail?: string
  materials: CourseMaterial[]
  prerequisites: string[]
  learningOutcomes: string[]
  createdAt: Date
  updatedAt: Date
}

export type CourseLevel = 'beginner' | 'intermediate' | 'advanced'
export type CourseCategory = 'environmental' | 'geospatial' | 'research' | 'technology' | 'management'

export interface CourseMaterial {
  id: string
  title: string
  type: MaterialType
  url: string
  size?: number
  duration?: number
}

export type MaterialType = 'video' | 'document' | 'presentation' | 'quiz' | 'assignment'

export interface Enrollment {
  id: string
  userId: string
  courseId: string
  status: EnrollmentStatus
  progress: number
  completedAt?: Date
  certificateUrl?: string
  enrolledAt: Date
}

export type EnrollmentStatus = 'enrolled' | 'in_progress' | 'completed' | 'dropped'

export interface Certificate {
  id: string
  userId: string
  courseId: string
  title: string
  issuedAt: Date
  certificateUrl: string
  verificationCode: string
}
