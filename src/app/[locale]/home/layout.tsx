import { useMessages, useTranslations } from 'next-intl'

import { DecorativeCurve } from '@/common/components/presentationals/decorative-curve'
import { SectionWithAsideContainer } from '@/common/components/containers/section-with-aside'
import { UsersCardsFiltersFormQueryLogic } from '@/features/home/components/presentationals/users-cards-filters-form-query-logic'
import { UsersCardsMobileFiltersContainer } from '@/features/home/components/presentationals/users-cards-filters'
import { withIntlClientProvider } from '@/common/hocs/with-intl-client-provider'
import * as Hero from '@/common/components/compounds/hero'

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

export default function Layout({ children }: Readonly<LayoutProps>) {
  const messages = useMessages()
  const t = useTranslations('COMMON')
  const tHome = useTranslations('HOME')

  return (
    <>
      <Hero.Root className="grid-wrapper relative">
        <Hero.Banner
          containerProps={{
            className: 'full-width',
          }}
          imageProps={{
            src: '/images/header2.jpg',
            alt: 'sexy woman from behind',
            className: 'full-width',
          }}
        />

        <Hero.Title className="animated-gradient whitespace-pre-line">
          {tHome('hero.title')}
        </Hero.Title>
      </Hero.Root>

      <SectionWithAsideContainer
        heroProps={{
          className: 'flex flex-col gap-3',
        }}
        hero={
          <>
            <h1 className="gradient-heading heading-decorator mb-10">
              {tHome('title')}
              <small>{tHome('subtitle')}</small>
            </h1>

            <UsersCardsMobileFilters
              intlProps={{
                messages,
              }}
              containerProps={{
                className: 'md:hidden',
              }}
            />
          </>
        }
        aside={
          <div className="svg-background-2 sticky top-[var(--navbar-full-height)] flex flex-col gap-3">
            <div className="pl-2 text-gray-900 dark:text-gray-100">
              <strong className="text-lg font-semibold text-gray-950 dark:text-gray-50">
                {t('words-phrases.filters')}
              </strong>
              <br />
              {t('forms.generic-subtitle')}
            </div>

            <UsersCardsFiltersForm
              intlProps={{
                messages,
              }}
            />
          </div>
        }
        asideProps={{
          className:
            'hidden md:block bg-gradient-to-l from-accent-50/80 dark:from-brand-500/5 dark:to-accent-700/10',
        }}
      >
        {children}
      </SectionWithAsideContainer>
    </>
  )
}
