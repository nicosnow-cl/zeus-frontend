'use client'

import { Link } from '@intl/navigation'

import { LogoIcon } from '@/common/icons'
import { Routes } from '@config/enums'
import { useUiStore } from '@/common/store/ui'
import * as DesktopNavbar from '../../presentationals/desktop-navbar'

export const NavbarContainer = () => {
  const showNavbar = useUiStore((state) => state.showNavbar)

  return (
    <DesktopNavbar.Root showNavbar={showNavbar}>
      <DesktopNavbar.TopBar
        logo={
          <Link href={Routes.Home}>
            <LogoIcon
              className="hover:fill-primary-600 cursor-pointer fill-shade-100 transition-[fill] duration-300"
              width={30}
              height={30}
            />
          </Link>
        }
      />
      <DesktopNavbar.BottomBar />
    </DesktopNavbar.Root>
  )
}
