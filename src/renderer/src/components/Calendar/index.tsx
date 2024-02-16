import { useCalanderStore } from '@renderer/stores'
import { CalenderNavgbar } from './Navbar'
import { getDatesByMonth } from '@lib/date'
import { DayBlock } from './ DayBlock'

export function Calendar() {
  const { currentDate, calendarStartDay, showMonth } = useCalanderStore()
  const { days } = getDatesByMonth(showMonth, calendarStartDay)

  return (
    <div>
      <CalenderNavgbar />
      <div className="grid grid-cols-7 text-center py-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 divide-x divide-y">
        {days.map((day) => (
          <DayBlock key={day.toISOString()} date={day} currentDate={currentDate} />
        ))}
      </div>
    </div>
  )
}
