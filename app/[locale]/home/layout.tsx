import { UsersCardsFiltersContainer } from '@/features/home/components/containers/users-cards-filters'

import * as Hero from '@/common/components/ui/presentational/hero'

export type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Hero.Root>
        <Hero.Banner
          imageProps={{
            src: '/images/header2.jpg',
            alt: 'sexy woman in the beach',
          }}
        />

        <Hero.Title className="animated-gradient">
          Unleash. <br />
          Improve. <br />
          Rise.
        </Hero.Title>
      </Hero.Root>

      <section className="grid-wrapper main-content">
        <UsersCardsFiltersContainer />

        {children}
      </section>
    </>
  )
}
