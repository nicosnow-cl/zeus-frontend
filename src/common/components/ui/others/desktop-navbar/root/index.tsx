import { RootProps } from '@/common/types/components/desktop-navbar.type'

export function Root({ children }: RootProps) {
  return <nav className="fixed z-40 w-full">{children}</nav>
}
