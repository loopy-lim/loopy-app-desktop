import { cn } from '@lib/utils'
import { PropsWithChildren } from 'react'

interface MainContainerProps extends PropsWithChildren {
  className?: string
}

export function MainContainer({ children, className }: MainContainerProps) {
  return <div className={cn('px-12 max-w-[1200px]', className)}>{children}</div>
}
