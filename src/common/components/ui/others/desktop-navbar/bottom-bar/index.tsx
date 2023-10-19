'use client'

import { Flex, Separator } from '@radix-ui/themes'

import { Breadcrumbs } from '../../breadcrumbs'
import { ColorModeSwitch } from '../../color-mode-switch'
import { getUrlBreadcrumb } from '@/common/utils/getUrlBreadcrumb'
import { LangModeSwitch } from '../../lang-mode-switch'
import { usePathname } from '@intl/navigation'

export const BottomBar = () => {
  const pathname = usePathname()

  const crumbs = getUrlBreadcrumb(pathname)

  return (
    <Flex
      className={`bg-woodsmoke-200/80 fill-woodsmoke-950 text-woodsmoke-950 backdrop-blur-md backdrop-saturate-150`}
      justify="between"
      py="1"
      pl="5"
      pr="5"
    >
      <Breadcrumbs crumbs={crumbs} />

      <span className={`flex items-center gap-x-3`}>
        <ColorModeSwitch />
        <Separator orientation="vertical" size="1" />
        <LangModeSwitch />
      </span>
    </Flex>
  )
}
