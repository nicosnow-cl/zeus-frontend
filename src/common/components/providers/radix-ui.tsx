'use client'

import { Theme } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'
// import { ThemePanel } from '@radix-ui/themes';

export function RadixUiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <Theme accentColor="gray" grayColor="slate" radius="full" scaling="90%">
        {children}
        {/* <ThemePanel /> */}
      </Theme>
    </ThemeProvider>
  )
}
