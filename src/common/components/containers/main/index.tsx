// import { DarkModeTransitionContainer } from '../dark-mode-transition'
import { withIntlClientProvider } from '@/common/hocs/with-intl-client-provider'
import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl'
import { NavbarContainer as NavbarContainerClient } from '../navbar'

const NavbarContainer = withIntlClientProvider(NavbarContainerClient, 'NavbarContainer')

export type MainContainerProps = {
  children: React.ReactNode | React.ReactNode[]
}

export function MainContainer({ children }: MainContainerProps) {
  const messages = useMessages()

  return (
    <>
      <div className="h-[var(--navbar-full-height)] bg-shade-900">
        <NavbarContainer
          intlProps={{
            messages,
          }}
        />
      </div>

      <main className="flex flex-col gap-y-5">{children}</main>
    </>
  )
}
