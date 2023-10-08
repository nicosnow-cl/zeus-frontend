import { Theme } from '@radix-ui/themes';

export function RadixUiProvider({ children }: { children: React.ReactNode }) {
  return <Theme>{children}</Theme>;
}
