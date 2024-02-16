import { Button } from '@components/ui/button'
import { useCalanderStore } from '@renderer/stores'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export function CalenderNavgbar() {
  const { showMonth, changeShowMonth, resetShowMonth } = useCalanderStore()

  return (
    <div className="flex h-12 justify-between items-center">
      <div className="text-lg font-semibold">
        {showMonth.toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long'
        })}
      </div>
      <div className="flex justify-between items-center">
        <Button variant="ghost" size="icon" onClick={() => changeShowMonth(-1)}>
          <ArrowLeft />
        </Button>
        <Button variant="ghost" onClick={resetShowMonth}>
          오늘
        </Button>
        <Button variant="ghost" size="icon" onClick={() => changeShowMonth(1)}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  )
}
