import { InitialTransition } from '@/common/components/ui/effects/initial-transition'

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <InitialTransition />

      {children}
    </>
  )
}
