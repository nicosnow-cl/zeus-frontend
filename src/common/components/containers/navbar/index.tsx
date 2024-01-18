'use client'

import { Link } from '@intl/navigation'
import { throttle } from 'lodash'
import { useState } from 'react'

import { LogoIcon } from '@/common/icons'
import { Routes } from '@config/enums'
import { useEventListener } from '@/common/hooks/use-event-listener'
import { useUiStore } from '@/common/store/ui'
import * as DesktopNavbar from '../../presentationals/desktop-navbar'

const DEFAULT_CLASSES =
  'border-none transition-background duration-300 [--bg-to:theme(colors.shade.950)]'
const IN_POSITION_CLASSES = '[--bg-from:theme(colors.shade.950/0)]'
const STICKY_CLASSES = 'glassmorphism [--bg-from:theme(colors.shade.950/0.8)]'

// TODO: Refactor this component to benefit from the frame motion components and twMerge

export const NavbarContainer = () => {
  const showNavbar = useUiStore((state) => state.showNavbar)
  const [isSticky, setIsSticky] = useState(false)

  const handleChangePosition = throttle(() => setIsSticky(window.scrollY >= 400), 100)

  useEventListener('scroll', handleChangePosition)

  return (
    <DesktopNavbar.Root className={!isSticky ? 'shadow-none' : ''} showNavbar={showNavbar}>
      <DesktopNavbar.TopBar
        framerContaineClassName={`${DEFAULT_CLASSES} ${
          isSticky ? STICKY_CLASSES : IN_POSITION_CLASSES
        }`}
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

      <DesktopNavbar.BottomBar
        containerProps={{
          className: isSticky
            ? 'visible opacity-100 transition-[opacity,visibility] duration-300'
            : 'invisible opacity-0 transition-[opacity,visibility] duration-300',
        }}
      />
    </DesktopNavbar.Root>
  )
}
