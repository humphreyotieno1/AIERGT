import { create } from 'zustand'
import type { Portal, PortalType, Course, Enrollment } from '@/types/portal.types'

interface PortalState {
  // State
  activePortal: PortalType | null
  portals: Portal[]
  courses: Course[]
  enrollments: Enrollment[]
  isLoading: boolean
  error: string | null
  
  // Actions
  setActivePortal: (portal: PortalType) => void
  loadPortals: () => Promise<void>
  loadCourses: () => Promise<void>
  loadEnrollments: () => Promise<void>
  enrollInCourse: (courseId: string) => Promise<void>
  updateEnrollmentProgress: (enrollmentId: string, progress: number) => void
  clearError: () => void
  setLoading: (loading: boolean) => void
}

export const usePortalStore = create<PortalState>((set, get) => ({
  // Initial state
  activePortal: null,
  portals: [],
  courses: [],
  enrollments: [],
  isLoading: false,
  error: null,

  // Actions
  setActivePortal: (portal: PortalType) => {
    set({ activePortal: portal })
  },

  loadPortals: async () => {
    set({ isLoading: true, error: null })
    try {
      // TODO: Implement actual API call
      const response = await fetch('/api/portals')
      if (!response.ok) throw new Error('Failed to load portals')
      
      const portals: Portal[] = await response.json()
      set({ portals, isLoading: false })
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to load portals',
        isLoading: false,
      })
    }
  },

  loadCourses: async () => {
    set({ isLoading: true, error: null })
    try {
      // TODO: Implement actual API call
      const response = await fetch('/api/courses')
      if (!response.ok) throw new Error('Failed to load courses')
      
      const courses: Course[] = await response.json()
      set({ courses, isLoading: false })
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to load courses',
        isLoading: false,
      })
    }
  },

  loadEnrollments: async () => {
    set({ isLoading: true, error: null })
    try {
      // TODO: Implement actual API call
      const response = await fetch('/api/enrollments')
      if (!response.ok) throw new Error('Failed to load enrollments')
      
      const enrollments: Enrollment[] = await response.json()
      set({ enrollments, isLoading: false })
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to load enrollments',
        isLoading: false,
      })
    }
  },

  enrollInCourse: async (courseId: string) => {
    set({ isLoading: true, error: null })
    try {
      // TODO: Implement actual API call
      const response = await fetch('/api/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId }),
      })
      
      if (!response.ok) throw new Error('Failed to enroll in course')
      
      const enrollment: Enrollment = await response.json()
      set(state => ({
        enrollments: [...state.enrollments, enrollment],
        isLoading: false,
      }))
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to enroll in course',
        isLoading: false,
      })
    }
  },

  updateEnrollmentProgress: (enrollmentId: string, progress: number) => {
    set(state => ({
      enrollments: state.enrollments.map(enrollment =>
        enrollment.id === enrollmentId
          ? { ...enrollment, progress }
          : enrollment
      ),
    }))
  },

  clearError: () => set({ error: null }),
  setLoading: (loading: boolean) => set({ isLoading: loading }),
}))
