'use client'

import { Button, Container, Flex, Heading } from '@radix-ui/themes'
import { useTranslations } from 'next-intl'
import NextLink from 'next/link'

import { BoxArrowRightIcon, PatchCheckFillIcon, SearchIcon } from '@/common/icons'
import { ContentWithDropdown } from '../../../effects/dropdown-effect'
import { Routes } from '@/common/enums'
import { TopBarProps } from '@/common/types/components/desktop-navbar.type'

export function TopBar({ logo }: TopBarProps) {
  const t = useTranslations()

  return (
    <ContentWithDropdown
      classNameContainer="border-b border-b-woodsmoke-200 text-woodsmoke-50 backdrop-blur-md backdrop-saturate-150 [--bg-from:theme(colors.woodsmoke.950/0.9)] [--bg-to:theme(colors.woodsmoke.950)]"
      classNameOverlay="h-screen w-screen"
      content={<Heading>Buscar en tumoko.app</Heading>}
      variantsContainer={{
        closed: {
          backgroundColor: 'var(--bg-from)',
        },
        open: {
          backgroundColor: 'var(--bg-to)',
        },
      }}
    >
      {({ isOpen, handleToggle }) => (
        <Flex align="center" className="h-[44px] bg-transparent" justify="center" px="6">
          <Container size="4">
            <Flex align="center" justify="center">
              {logo}

              <Flex gap="8">
                <NextLink className={`flex items-center gap-x-3 text-1`} href={Routes.Contact}>
                  {t('sidebar.sign-up')}
                  {<PatchCheckFillIcon width={14} height={14} />}
                </NextLink>
                <NextLink className={`flex items-center gap-x-3 text-1`} href={Routes.Home}>
                  {t('sidebar.sign-in')}
                  <BoxArrowRightIcon width={14} height={14} />
                </NextLink>
                <NextLink className={`flex items-center gap-x-3 text-1`} href={Routes.Contact}>
                  {t('sidebar.contact')}
                </NextLink>
                <Button className={`flex items-center gap-x-3 text-1`}>
                  {<SearchIcon width={14} height={14} />}
                </Button>
              </Flex>
            </Flex>
          </Container>

          <button onClick={() => handleToggle()}>Collapse</button>
        </Flex>
      )}
    </ContentWithDropdown>
  )
}
