import { useMessages } from 'next-intl'

import * as Hero from '@/common/components/ui/presentational/hero'
import { ContainerDecorativeCurve } from '@/common/components/ui/presentational/container-decorative-curve'
import { SectionWithAsideContainer } from '@/common/components/containers/section-with-aside'
import { UsersCardsFiltersFormQueryLogic } from '@/features/home/components/containers/users-cards-filters-form-query-logic'
import { UsersCardsMobileFiltersContainer } from '@/features/home/components/containers/users-cards-filters'
import { withIntlClientProvider } from '@/common/hocs/with-intl-client-provider'

const UsersCardsFiltersForm = withIntlClientProvider(
  UsersCardsFiltersFormQueryLogic,
  'UsersCardsFiltersForm'
)

const UsersCardsMobileFilters = withIntlClientProvider(
  UsersCardsMobileFiltersContainer,
  'UsersCardsMobileFilters'
)

export type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const messages = useMessages()

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

        <ContainerDecorativeCurve />
      </Hero.Root>

      <SectionWithAsideContainer
        heroProps={{
          className: 'flex flex-col gap-3',
        }}
        hero={
          <>
            <h1 className="gradient-heading heading-decorator">
              Nuestros usuarios
              <small>Encuentre el mejor servicio de acompañantes</small>
            </h1>

            <UsersCardsMobileFilters
              intlProps={{
                messages,
              }}
              containerProps={{
                className: 'block md:hidden',
              }}
            />
          </>
        }
        aside={
          <div className="sticky top-[var(--navbar-full-height)] flex flex-col gap-3">
            <div>
              <p className="pl-2 text-lg font-semibold text-gray-950 dark:text-gray-50">Filtros</p>
              <p className="pl-2 text-sm text-gray-500 dark:text-gray-400">
                Ajuste los resultados de acuerdo a sus preferencias
              </p>
            </div>

            <UsersCardsFiltersForm
              intlProps={{
                messages,
              }}
            />
          </div>
        }
        asideProps={{
          className: 'hidden md:block min-w-[225px]',
        }}
      >
        {children}
      </SectionWithAsideContainer>
    </>
  )
}
