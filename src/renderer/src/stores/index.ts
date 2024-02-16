import { CALENDAR_START_DAY } from '@components/constants/calendar'
import { create } from 'zustand'

interface calenderState {
  currentDate: Date
  showMonth: Date
  calendarStartDay: number
  setDate: (date: string) => void
  changeShowMonth: (month: number) => void
  resetShowMonth: () => void
}

export const useCalanderStore = create<calenderState>((set) => ({
  currentDate: new Date(),
  showMonth: new Date(),
  calendarStartDay: CALENDAR_START_DAY.SUNDAY,
  setDate: (date) => set({ currentDate: new Date(date) }),
  changeShowMonth: (month) =>
    set((state) => ({
      showMonth: new Date(state.showMonth.setMonth(state.showMonth.getMonth() + month))
    })),
  resetShowMonth: () => set({ showMonth: new Date() })
}))
