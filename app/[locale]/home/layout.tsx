import { Container } from '@radix-ui/themes'

import { UserCardsFiltersContainer } from '@/features/home/components/containers/user-cards-filters-container'

export type TLayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: TLayoutProps) {
  return (
    <section>
      <Container
        size={{
          initial: '1',
          md: '2',
          lg: '3',
          xl: '4',
        }}
      >
        <UserCardsFiltersContainer />

        {children}
      </Container>
    </section>
  )
}
