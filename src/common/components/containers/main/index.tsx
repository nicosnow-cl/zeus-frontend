import { useMessages } from 'next-intl'
import pick from 'lodash/pick'

import { Footer } from '../../layout/footer'
import { NavbarContainer as NavbarContainerClient } from '../navbar'
import { withIntlClientProvider } from '@/common/hocs/with-intl-client-provider'

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

      <Footer className="mt-5" />
    </>
  )
}
