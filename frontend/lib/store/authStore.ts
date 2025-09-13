import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User, AuthResult, LoginCredentials, RegisterData } from '@/types/auth.types'

interface AuthState {
  // State
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  
  // Actions
  login: (credentials: LoginCredentials) => Promise<void>
  register: (data: RegisterData) => Promise<void>
  logout: () => void
  refreshToken: () => Promise<void>
  updateProfile: (updates: Partial<User>) => void
  clearError: () => void
  setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      login: async (credentials: LoginCredentials) => {
        set({ isLoading: true, error: null })
        try {
          // TODO: Implement actual API call
          const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
          })
          
          if (!response.ok) {
            throw new Error('Login failed')
          }
          
          const data: AuthResult = await response.json()
          
          set({
            user: data.user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          })
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Login failed',
            isLoading: false,
          })
        }
      },

      register: async (data: RegisterData) => {
        set({ isLoading: true, error: null })
        try {
          // TODO: Implement actual API call
          const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
          
          if (!response.ok) {
            throw new Error('Registration failed')
          }
          
          const result: AuthResult = await response.json()
          
          set({
            user: result.user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          })
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Registration failed',
            isLoading: false,
          })
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          error: null,
        })
        // TODO: Clear any stored tokens
      },

      refreshToken: async () => {
        try {
          // TODO: Implement token refresh logic
          const response = await fetch('/api/auth/refresh', {
            method: 'POST',
          })
          
          if (response.ok) {
            const data: AuthResult = await response.json()
            set({ user: data.user })
          } else {
            // Token refresh failed, logout user
            get().logout()
          }
        } catch (error) {
          get().logout()
        }
      },

      updateProfile: (updates: Partial<User>) => {
        const currentUser = get().user
        if (currentUser) {
          set({
            user: { ...currentUser, ...updates },
          })
        }
      },

      clearError: () => set({ error: null }),
      setLoading: (loading: boolean) => set({ isLoading: loading }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)
