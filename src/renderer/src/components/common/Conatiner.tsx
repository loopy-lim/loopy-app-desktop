import { cn } from '@lib/utils'
import { PropsWithChildren } from 'react'
interface ContainerProps extends PropsWithChildren {
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn('p-2 border border-border rounded', className)}>{children}</div>
}
