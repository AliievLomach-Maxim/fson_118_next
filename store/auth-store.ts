import { User } from '@/types/user'
import { create } from 'zustand'

interface AuthStore {
  isAuth: boolean
  user: User | null
  setUser: (user: User) => void
  clearAuth: () => void
}

export const useAuth = create<AuthStore>()((set) => ({
  isAuth: false,
  user: null,
  setUser: (user: User) => set({ user, isAuth: true }),
  clearAuth: () => set({ user: null, isAuth: false }),
}))
