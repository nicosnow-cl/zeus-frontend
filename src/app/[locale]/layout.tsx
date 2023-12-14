import { fonts } from '@/theme/fonts'
import { getValidLocale } from '@intl/locale'
import { MainContainer } from '@/common/components/containers/main'
import { notFound } from 'next/navigation'

import '@styles/global.css'
import '@styles/theme-config.css'

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
    <html lang={locale} className={fonts.map((font) => font.variable).join(' ')}>
      <body>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  )
}
