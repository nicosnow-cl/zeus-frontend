import { notFound } from 'next/navigation'

import { fonts } from '@/theme/fonts'
import { getValidLocale } from '@intl/locale'
import { MainContainer } from '@/common/components/containers/main'
import { Providers } from '@/common/components/providers'

import '@styles/global.scss'

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
      <body className="bg-gradient-1">
        <Providers>
          <MainContainer>{children}</MainContainer>
        </Providers>
      </body>
    </html>
  )
}
