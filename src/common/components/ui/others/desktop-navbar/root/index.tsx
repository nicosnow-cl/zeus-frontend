import { RootProps } from '@/common/types/components/desktop-navbar.type'

export function Root({ children }: RootProps) {
  return <nav className="fixed w-full">{children}</nav>
}
