{
  /* TODO: Find a way to improve this component to apply on specific clients components */
}

import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider as IntlClientProvider } from 'next-intl'
import { useLocale } from 'next-intl'

export type NextIntlClientProviderProps = {
  children: React.ReactNode
}

export const NextIntlClientProvider = async ({ children }: NextIntlClientProviderProps) => {
  const locale = useLocale()
  const messages = await getMessages({ locale })

  return (
    <IntlClientProvider locale={locale} messages={messages}>
      {children}
    </IntlClientProvider>
  )
}
