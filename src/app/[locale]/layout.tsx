import { notFound } from 'next/navigation'

import { fonts } from '@/theme/fonts'
import { getValidLocale } from '@intl/locale'
import { GradientBackground } from '@/common/components/misc/gradient-background'
import { MainContainer } from '@/common/components/containers/main'

import '@styles/global.scss'
import { Providers } from '@/common/components/providers'

export type LocaleLayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<LocaleLayoutProps>) {
  const { isValid } = getValidLocale(locale)

  if (!isValid) notFound()

  return (
    <html
      lang={locale}
      className={fonts.map((font) => font.variable).join(' ')}
      suppressHydrationWarning
    >
      <body>
        <GradientBackground />

        <Providers>
          <MainContainer>{children}</MainContainer>
        </Providers>
      </body>
    </html>
  )
}
