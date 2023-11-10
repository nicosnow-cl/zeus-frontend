'use client'

import { useMemo } from 'react'
import { Flex, Separator } from '@radix-ui/themes'

import { Breadcrumbs } from '../../breadcrumbs'
import { ColorModeSwitch } from '../../color-mode-switch'
import { getUrlBreadcrumb } from '@/common/utils/getUrlBreadcrumb'
import { LangModeSwitch } from '../../lang-mode-switch'
import { usePathname } from '@intl/navigation'

export const BottomBar = () => {
  const pathname = usePathname()
  const crumbs = useMemo(() => getUrlBreadcrumb(pathname), [pathname])

  return (
    <div
      className={`grid-wrapper min-h-[26px] bg-woodsmoke-200/80 fill-woodsmoke-950 text-woodsmoke-950 backdrop-blur-md backdrop-saturate-150`}
    >
      <Flex className="breakout" justify="between" py="1">
        <Breadcrumbs crumbs={crumbs} />

        <span className={`flex items-center gap-x-3`}>
          <ColorModeSwitch />
          <Separator orientation="vertical" size="1" />
          <LangModeSwitch />
        </span>
      </Flex>
    </div>
  )
}
