import { BrandingTransition } from '@/common/components/ui/effects/branding-transition'

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BrandingTransition />

      {children}
    </>
  )
}
