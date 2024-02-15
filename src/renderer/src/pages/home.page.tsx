import { Container } from '@components/common/Conatiner'
import { MainContainer } from '@components/common/MainConatiner'
import { Button } from '@renderer/components/ui/button'

export function HomePage() {
  return (
    <MainContainer className="bg-background">
      <div className="py-8 font-semibold text-4xl">Loopy&apos;s Todo</div>
      <Container>
        viewer
        <Button onClick={() => alert('alert')}>button</Button>
      </Container>
    </MainContainer>
  )
}
