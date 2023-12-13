import { fonts } from '@/theme/fonts'
import { getValidLocale } from '@intl/locale'
import { MainContainer } from '@/common/components/containers/main'
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
        {/* <RadixUiProvider> */}
        <MainContainer>{children}</MainContainer>
        {/* </RadixUiProvider> */}
      </body>
    </html>
  )
}

export default RootLayout
