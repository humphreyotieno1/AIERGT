import { UserRole } from '@prisma/client'

export interface RegisterData {
  name: string
  email: string
  password: string
  phone?: string
  organization?: string
  role: UserRole
}

export interface LoginData {
  email: string
  password: string
}

export interface UpdateProfileData {
  name?: string
  phone?: string
  organization?: string
  bio?: string
  location?: string
  website?: string
}

export interface AuthResponse {
  success: boolean
  error?: string
  user?: any
  message?: string
}

export interface UserStats {
  enrollments: number
  certificates: number
  posts: number
}

export interface UserWithStats {
  id: string
  name: string
  email: string
  phone?: string
  organization?: string
  role: UserRole
  isVerified: boolean
  isActive: boolean
  createdAt: Date
  profile?: any
  stats: UserStats
}
