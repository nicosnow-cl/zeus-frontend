import { fonts } from '@/theme/fonts'
import { getValidLocale } from '@intl/locale'
import { MainContainer } from '@/common/components/containers/main'
import { NextIntlClientProvider } from '@/common/components/providers/next-intl-client'
import { RadixUiProvider } from '@/common/components/providers/radix-ui'

import '@styles/global.css'
import '@styles/theme-config.css'

function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: {
    locale: string
  }
}) {
  const appLocale = getValidLocale(locale)

  return (
    <html
      lang={appLocale}
      className={fonts.map((font) => font.variable).join(' ')}
      suppressHydrationWarning
    >
      <body>
        {/* TODO: Find a better solution to apply next-intl */}
        <NextIntlClientProvider>
          <RadixUiProvider>
            <MainContainer>{children}</MainContainer>
          </RadixUiProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
