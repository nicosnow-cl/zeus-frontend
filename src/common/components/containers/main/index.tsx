import { useMessages } from 'next-intl'
import pick from 'lodash/pick'

import { NavbarContainer as NavbarContainerClient } from '../navbar'
import { withIntlClientProvider } from '@/common/hocs/with-intl-client-provider'

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
            messages: pick(messages, 'COMMON.sidebar'),
          }}
        />
      </div>

      <main className="flex flex-col gap-y-5">{children}</main>
    </>
  )
}
