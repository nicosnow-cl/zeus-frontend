import * as Hero from '@/common/components/ui/presentational/hero'
import { SectionWithAsideContainer } from '@/common/components/containers/section-with-aside'
import { UsersCardsFiltersForm } from '@/features/home/components/forms/users-cards-filters-form'
import { UsersCardsFiltersContainer } from '@/features/home/components/containers/users-cards-filters'

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

        <svg
          className="curve full-width"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </Hero.Root>

      <SectionWithAsideContainer
        heroProps={{
          className: 'block md:hidden',
        }}
        hero={<UsersCardsFiltersContainer />}
        aside={
          <UsersCardsFiltersForm
            containerProps={{
              className: 'sticky top-[78px]',
            }}
          />
        }
        asideProps={{
          className: 'hidden md:block',
        }}
      >
        {children}
      </SectionWithAsideContainer>
    </>
  )
}
