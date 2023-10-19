'use client'

import { Box, Container, Separator } from '@radix-ui/themes'

import { Breadcrumbs } from '../../breadcrumbs'
import { ColorModeSwitch } from '../../color-mode-switch'
import { getUrlBreadcrumb } from '@/common/utils/getUrlBreadcrumb'
import { LangModeSwitch } from '../../lang-mode-switch'
import { usePathname } from 'next/navigation'

export const BottomBar = () => {
  const pathname = usePathname()

  const crumbs = getUrlBreadcrumb(pathname)

  return (
    <Box
      pr="2"
      className={`flex justify-between bg-woodsmoke-200/80 fill-woodsmoke-950 text-woodsmoke-950 backdrop-blur-md backdrop-saturate-150`}
    >
      <Container py="1" size="4">
        <Breadcrumbs crumbs={crumbs} />
      </Container>

      <span className={`flex items-center gap-x-3`}>
        <ColorModeSwitch />
        <Separator orientation="vertical" size="1" />
        <LangModeSwitch />
      </span>
    </Box>
  )
}
