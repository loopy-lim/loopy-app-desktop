import { create } from 'zustand'

interface calanderState {
  date: Date
  setDate: (date: string) => void
}

export const useCalanderStore = create<calanderState>((set) => ({
  date: new Date(),
  setDate: (date) => set({ date: new Date(date) })
}))
