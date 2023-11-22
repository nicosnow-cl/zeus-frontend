import { UsersCardsFiltersContainer } from '@/features/home/components/containers/users-cards-filters'

import HeroTitle from '@/common/components/ui/presentational/hero-title'
import Image from 'next/image'

export type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <section className="grid-wrapper relative">
        <div className="full-width h-[550px] bg-shade-950">
          <Image
            className="full-width hero-banner"
            src="/images/header2.jpg"
            alt="sexy woman in the beach"
            fill
          />
        </div>

        <HeroTitle className="animated-gradient absolute right-0 top-7 text-end text-7xl">
          Improve. <br />
          Unleash. <br />
          Rise.
        </HeroTitle>
      </section>

      <section className="grid-wrapper main-content">
        <UsersCardsFiltersContainer />

        {children}
      </section>
    </>
  )
}
