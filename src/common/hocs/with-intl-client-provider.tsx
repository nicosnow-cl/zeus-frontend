import { NextIntlClientProvider } from '../components/providers/next-intl-client'

export function withIntlClientProvider<T extends object>(
  WrappedComponent: React.ComponentType<T>,
  componentName: string
) {
  const ComponentWithIntlProvider = (props: T) => {
    return (
      <NextIntlClientProvider>
        <WrappedComponent {...props} />
      </NextIntlClientProvider>
    )
  }

  ComponentWithIntlProvider.displayName = `withIntlClientProvider(${componentName})`

  return ComponentWithIntlProvider
}
