import { Heading, Text } from '@radix-ui/themes'

import * as Hero from '@/common/components/ui/presentational/hero'
import { SectionWithAsideContainer } from '@/common/components/containers/section-with-aside'
import { UsersCardsMobileFiltersContainer } from '@/features/home/components/containers/users-cards-filters'
import { UsersCardsFiltersFormQueryLogic } from '@/features/home/components/containers/users-cards-filters-form-query-logic'

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
          className: 'flex flex-col gap-3',
        }}
        hero={
          <>
            <Heading as="h1" className="title-1 text-4xl">
              Nuestros usuarios
              <Text as="p" className="font-default text-base font-light">
                Encuentre el mejor servicio de acompañantes
              </Text>
            </Heading>

            <UsersCardsMobileFiltersContainer
              containerProps={{
                className: 'block md:hidden',
              }}
            />
          </>
        }
        aside={
          <div className="sticky top-[var(--navbar-full-height)] flex flex-col gap-3">
            <div>
              <Text as="p" className="pl-2 text-lg font-semibold text-gray-950 dark:text-gray-50">
                Filtros
              </Text>
              <Text as="p" className="pl-2 text-sm text-gray-500 dark:text-gray-400">
                Ajuste los resultados de acuerdo a sus preferencias
              </Text>
            </div>

            <UsersCardsFiltersFormQueryLogic />
          </div>
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
