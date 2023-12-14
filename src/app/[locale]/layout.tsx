import { fonts } from '@/theme/fonts'
import { getValidLocale } from '@intl/locale'
import { MainContainer } from '@/common/components/containers/main'

import '@styles/global.css'
import '@styles/theme-config.css'

export type LocaleLayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  const appLocale = getValidLocale(locale)

  return (
    <html lang={appLocale} className={fonts.map((font) => font.variable).join(' ')}>
      <body>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  )
}
