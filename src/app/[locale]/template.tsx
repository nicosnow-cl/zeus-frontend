import { BrandingTransition } from '@/common/components/ui/effects/branding-transition'
import { DarkModeTransition } from '@/common/components/ui/effects/dark-mode-transition'

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BrandingTransition />
      <DarkModeTransition />

      {children}
    </>
  )
}
