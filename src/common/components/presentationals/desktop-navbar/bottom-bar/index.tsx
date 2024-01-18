'use client'

import * as Separator from '@radix-ui/react-separator'
import { useMemo } from 'react'
import { usePathname } from '@intl/navigation'

import { Breadcrumbs } from '../../breadcrumbs'
import { ColorModeSwitch } from '../../color-mode-switch'
import { getPathCrumbs } from '@/common/utils/get-path-crumbs'
import { LangModeSwitch } from '../../lang-mode-switch'
import { twMerge } from 'tailwind-merge'

export type BottomBarProps = {
  containerProps?: Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>
}

export const BottomBar = ({ containerProps }: BottomBarProps) => {
  const { className: containerClassName, ...restContainerProps } = containerProps ?? {}
  const containerClasses = twMerge(
    'grid-wrapper glassmorphism absolute bottom-0 w-full border-b border-none',
    containerClassName
  )

  const pathname = usePathname()
  const crumbs = useMemo(() => getPathCrumbs(pathname), [pathname])

  return (
    <div {...restContainerProps} className={containerClasses}>
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
