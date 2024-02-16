import { CALENDAR_START_DAY } from '@components/constants/calendar'

export const getDatesByMonth = (date: Date, startDay: CALENDAR_START_DAY = 0) => {
  const start = new Date(date)
  start.setDate(1)

  const end = new Date(date)
  end.setMonth(end.getMonth() + 1)
  end.setDate(0)

  const days = new Array(42).fill(0).map((_, i) => {
    const d = new Date(start)
    d.setDate(i - date.getDay() + 2 + startDay)
    return d
  })

  const firstDay = start.getDay()
  const lastDay = end.getDay()
  return {
    days,
    firstDay,
    lastDay
  }
}
