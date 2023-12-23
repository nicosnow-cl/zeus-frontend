'use client'

import * as Separator from '@radix-ui/react-separator'
import { useMemo } from 'react'
import { usePathname } from '@intl/navigation'

import { Breadcrumbs } from '../../breadcrumbs'
import { ColorModeSwitch } from '../../color-mode-switch'
import { getPathCrumbs } from '@/common/utils/get-path-crumbs'
import { LangModeSwitch } from '../../lang-mode-switch'

export const BottomBar = () => {
  const pathname = usePathname()
  const crumbs = useMemo(() => getPathCrumbs(pathname), [pathname])

  return (
    <div className="grid-wrapper absolute bottom-0 w-full bg-shade-100/70 backdrop-blur-md backdrop-saturate-150 dark:bg-shade-900/70">
      <div className="flex justify-between py-1">
        <Breadcrumbs crumbs={crumbs} />

        <span className="flex items-center gap-x-3">
          <ColorModeSwitch />
          <Separator.Root className="separator-root" orientation="vertical" decorative />
          <LangModeSwitch />
        </span>
      </div>
    </div>
  )
}
