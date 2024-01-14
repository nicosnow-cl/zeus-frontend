'use client'

import { QueryProvider } from './query-provider'
import { ThemeProvider } from './theme-provider'

export type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: Readonly<ProvidersProps>) {
  return (
    <QueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryProvider>
  )
}
