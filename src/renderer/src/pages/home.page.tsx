import { Button } from '@renderer/components/ui/button'

export function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={() => alert('alert')}>button</Button>
    </div>
  )
}
