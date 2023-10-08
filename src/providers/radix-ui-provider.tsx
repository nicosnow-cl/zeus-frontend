'use client';

import { Theme, ThemePanel } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';

export function RadixUiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <Theme>
        {children}
        <ThemePanel />
      </Theme>
    </ThemeProvider>
  );
}
