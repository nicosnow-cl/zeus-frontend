import { NextIntlClientProvider } from 'next-intl'

export type WithIntlClientProviderProps = {
  intlProps?: Omit<React.ComponentProps<typeof NextIntlClientProvider>, 'children'>
}

export function withIntlClientProvider<T extends object>(
  WrappedComponent: React.ComponentType<T>,
  componentName: string
) {
  const ComponentWithIntlProvider = (props: T & WithIntlClientProviderProps) => {
    const { intlProps, ...componentProps } = props

    return (
      <NextIntlClientProvider {...intlProps}>
        <WrappedComponent {...(componentProps as T)} />
      </NextIntlClientProvider>
    )
  }

  ComponentWithIntlProvider.displayName = `withIntlClientProvider(${componentName})`

  return ComponentWithIntlProvider
}
