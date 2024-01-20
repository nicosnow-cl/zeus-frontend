import { useMessages } from 'next-intl'
import pick from 'lodash/pick'

import { NavbarContainer as NavbarContainerClient } from '../navbar'
import { withIntlClientProvider } from '@/common/hocs/with-intl-client-provider'
import { Footer } from '../../layout/footer'

const NavbarContainer = withIntlClientProvider(NavbarContainerClient, 'NavbarContainer')

export type MainContainerProps = {
  children: React.ReactNode | React.ReactNode[]
}

export function MainContainer({ children }: Readonly<MainContainerProps>) {
  const messages = useMessages()

  return (
    <>
      <NavbarContainer
        intlProps={{
          messages: pick(messages, ['COMMON.route-names', 'COMMON.compounds.navbar']),
        }}
      />

      <main className="flex flex-col gap-y-5">{children}</main>

      <Footer />
    </>
  )
}
