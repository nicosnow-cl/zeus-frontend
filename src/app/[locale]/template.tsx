import { BrandingTransition } from '@/common/components/misc/branding-transition'
import { DarkModeTransition } from '@/common/components/misc/dark-mode-transition'

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BrandingTransition />
      <DarkModeTransition />

      {children}
    </>
  )
}
