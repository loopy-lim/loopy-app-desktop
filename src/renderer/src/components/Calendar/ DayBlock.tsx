import { cn } from '@lib/utils'
import { useCalanderStore } from '@renderer/stores'

interface DayBlockProps {
  date: Date
  currentDate: Date
}

export function DayBlock({ date, currentDate }: DayBlockProps) {
  const { showMonth } = useCalanderStore()

  return (
    <div
      className={cn(
        'min-h-10 aspect-square',
        { 'bg-yellow-200': date.toString() === currentDate.toString() },
        { 'text-border': showMonth.getMonth() !== date.getMonth() }
      )}
    >
      {date.toLocaleDateString()}
    </div>
  )
}
