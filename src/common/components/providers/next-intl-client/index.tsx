import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider as IntlClientProvider, useMessages } from 'next-intl'
import { useLocale } from 'next-intl'

export type NextIntlClientProviderProps = {
  children: React.ReactNode
}

export function NextIntlClientProvider({ children }: NextIntlClientProviderProps) {
  const locale = useLocale()
  const messages = useMessages()

  return <IntlClientProvider messages={messages}>{children}</IntlClientProvider>
}
