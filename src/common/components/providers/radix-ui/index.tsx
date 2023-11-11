'use client'

import { Theme } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'
// import { ThemePanel } from '@radix-ui/themes';

export const RadixUiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Theme
        accentColor="gray"
        grayColor="slate"
        radius="full"
        scaling="90%"
        panelBackground="translucent"
      >
        {children}
        {/* <ThemePanel /> */}
      </Theme>
    </ThemeProvider>
  )
}
