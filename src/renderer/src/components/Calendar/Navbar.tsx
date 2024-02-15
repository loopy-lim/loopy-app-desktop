import { Button } from '@components/ui/button'
import { useCalanderStore } from '@renderer/stores'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export function CalenderNavgbar() {
  const { date } = useCalanderStore()

  return (
    <div className="flex h-12 justify-between items-center">
      <div className="text-lg font-semibold">{date.toLocaleDateString()}</div>
      <div className="flex justify-between items-center">
        <Button variant="ghost" size="icon">
          <ArrowLeft />
        </Button>
        <Button variant="ghost">오늘</Button>
        <Button variant="ghost" size="icon">
          <ArrowRight />
        </Button>
      </div>
    </div>
  )
}
