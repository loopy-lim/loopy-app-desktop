import { PropsWithChildren } from 'react'

export function Container({ children }: PropsWithChildren) {
  return <div className="p-2 border border-border rounded">{children}</div>
}
