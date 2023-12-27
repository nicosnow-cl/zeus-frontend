import { notFound } from 'next/navigation'

import { fonts } from '@/theme/fonts'
import { getValidLocale } from '@intl/locale'
import { GradientBackground } from '@/common/components/ui/effects/gradient-background'
import { MainContainer } from '@/common/components/containers/main'
import { ThemeProvider } from '@/common/components/providers/theme-provider'

import '@styles/global.scss'

export type LocaleLayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
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

        <ThemeProvider>
          <MainContainer>{children}</MainContainer>
        </ThemeProvider>
      </body>
    </html>
  )
}
