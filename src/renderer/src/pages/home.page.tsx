import { Calendar } from '@components/Calendar'
import { Container } from '@components/common/Conatiner'
import { MainContainer } from '@components/common/MainConatiner'

export function HomePage() {
  return (
    <MainContainer className="bg-background">
      <div className="py-8 font-semibold text-4xl">Loopy&apos;s Todo</div>
      <Container>
        <Calendar />
      </Container>
    </MainContainer>
  )
}
