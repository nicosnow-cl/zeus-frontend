{
  /* TODO: Find a way to improve this componen to apply on specific clients components */
}

import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider as IntlClientProvider } from 'next-intl'
import { useLocale } from 'next-intl'

export type NextIntlClientProviderProps = {
  children: React.ReactNode
}

export default async function NextIntlClientProvider({ children }: NextIntlClientProviderProps) {
  const locale = useLocale()
  const messages = await getMessages({ locale })

  return (
    <IntlClientProvider locale={locale} messages={messages}>
      {children}
    </IntlClientProvider>
  )
}
