'use client'

import * as Separator from '@radix-ui/react-separator'
import { useMemo } from 'react'

import { Breadcrumbs } from '../../breadcrumbs'
import { ColorModeSwitch } from '../../color-mode-switch'
import { getPathCrumbs } from '@/common/utils/get-path-crumbs'
import { LangModeSwitch } from '../../lang-mode-switch'
import { usePathname } from '@intl/navigation'

export const BottomBar = () => {
  const pathname = usePathname()
  const crumbs = useMemo(() => getPathCrumbs(pathname), [pathname])

  return (
    <div
      className={`grid-wrapper absolute top-[var(--navbar-top-height)] min-h-[var(--navbar-bottom-height)] w-full bg-shade-200/80 fill-shade-950 text-shade-950 backdrop-blur-md backdrop-saturate-150`}
    >
      <div className="breakout justify-between py-1">
        <Breadcrumbs crumbs={crumbs} />

        <span className="flex items-center gap-x-3">
          <ColorModeSwitch />
          <Separator.Root orientation="vertical" />
          <LangModeSwitch />
        </span>
      </div>
    </div>
  )
}
