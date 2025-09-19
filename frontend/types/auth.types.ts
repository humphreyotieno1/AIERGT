export interface User {
  id: string
  email: string
  name: string
  phone?: string
  organization?: string
  role: UserRole
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
  profile?: UserProfile
}

export interface UserProfile {
  id: string
  userId: string
  bio?: string
  avatar?: string
  location?: string
  website?: string
  socialLinks?: SocialLinks
  preferences: UserPreferences
}

export interface SocialLinks {
  linkedin?: string
  twitter?: string
  github?: string
  website?: string
}

export interface UserPreferences {
  language: string
  timezone: string
  notifications: NotificationSettings
  theme: 'light' | 'dark' | 'system'
}

export interface NotificationSettings {
  email: boolean
  push: boolean
  sms: boolean
  courseUpdates: boolean
  eventReminders: boolean
  newsletter: boolean
}

export type UserRole = 'ADMIN' | 'AFRICAN_CONSULTANT' | 'PARTNER' | 'EXPATRIATE_CONSULTANT' | 'STUDENT'

export interface AuthResult {
  user: User
  token: string
  refreshToken: string
  expiresAt: Date
}

export interface LoginCredentials {
  email: string
  password: string
  rememberMe?: boolean
}

export interface RegisterData {
  name: string
  email: string
  password: string
  phone?: string
  organization?: string
  userType: UserRole
}

export interface PasswordResetData {
  email: string
}

export interface PasswordChangeData {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}
