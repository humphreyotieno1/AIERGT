import { create } from 'zustand'

interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

interface UIState {
  // Sidebar state
  sidebarOpen: boolean
  
  // Modal states
  modals: Record<string, boolean>
  
  // Notifications
  notifications: Notification[]
  
  // Loading states
  globalLoading: boolean
  
  // Actions
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  
  openModal: (modalId: string) => void
  closeModal: (modalId: string) => void
  closeAllModals: () => void
  
  addNotification: (notification: Omit<Notification, 'id'>) => void
  removeNotification: (id: string) => void
  clearNotifications: () => void
  
  setGlobalLoading: (loading: boolean) => void
}

export const useUIStore = create<UIState>((set, get) => ({
  // Initial state
  sidebarOpen: false,
  modals: {},
  notifications: [],
  globalLoading: false,

  // Sidebar actions
  toggleSidebar: () => set(state => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),

  // Modal actions
  openModal: (modalId: string) => set(state => ({
    modals: { ...state.modals, [modalId]: true }
  })),
  
  closeModal: (modalId: string) => set(state => ({
    modals: { ...state.modals, [modalId]: false }
  })),
  
  closeAllModals: () => set({ modals: {} }),

  // Notification actions
  addNotification: (notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newNotification: Notification = {
      ...notification,
      id,
      duration: notification.duration || 5000,
    }
    
    set(state => ({
      notifications: [...state.notifications, newNotification]
    }))

    // Auto-remove notification after duration
    if (newNotification.duration) {
      setTimeout(() => {
        get().removeNotification(id)
      }, newNotification.duration)
    }
  },

  removeNotification: (id: string) => set(state => ({
    notifications: state.notifications.filter(n => n.id !== id)
  })),

  clearNotifications: () => set({ notifications: [] }),

  // Loading actions
  setGlobalLoading: (loading: boolean) => set({ globalLoading: loading }),
}))
