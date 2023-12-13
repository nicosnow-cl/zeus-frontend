import { withIntlClientProvider } from '@/common/hocs/with-intl-client-provider'
// import { DarkModeTransitionContainer } from '../dark-mode-transition'
import { NavbarContainer as NavbarContainerClient } from '../navbar'

const NavbarContainer = withIntlClientProvider(NavbarContainerClient, 'NavbarContainer')

export type MainContainerProps = {
  children: React.ReactNode | React.ReactNode[]
}

export async function MainContainer({ children }: MainContainerProps) {
  return (
    <>
      <div className="h-[var(--navbar-full-height)] bg-shade-900">
        <NavbarContainer />
      </div>

      <main className="flex flex-col gap-y-5">{children}</main>
    </>
  )
}
