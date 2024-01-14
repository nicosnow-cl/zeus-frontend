'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'

export type ThemeProviderProps = {
  children: React.ReactNode
}

export function ThemeProvider({ children }: Readonly<ThemeProviderProps>) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  )
}
