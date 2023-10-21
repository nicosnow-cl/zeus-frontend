'use client'

import { Button, Container, Flex, Heading } from '@radix-ui/themes'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import NextLink from 'next/link'

import { BoxArrowRightIcon, PatchCheckFillIcon, SearchIcon } from '@/common/icons'
import { ContentWithDropdown } from '../../../effects/dropdown-effect'
import { Routes } from '@/common/enums'
import { TopBarProps } from '@/common/types/components/desktop-navbar.type'

export function TopBar({ logo }: TopBarProps) {
  const [currentContent, setCurrentContent] = useState<'search'>('search')
  const t = useTranslations()

  const handleSetSearchContent = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    handler: (value?: boolean | undefined) => void
  ) => {
    evt.preventDefault()
    evt.stopPropagation()

    setCurrentContent('search')
    handler()
  }

  const onMouseLeave = (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>,
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    evt.preventDefault()
    evt.stopPropagation()

    setter(false)
  }

  const getCurrentContent = (type: 'search') => {
    if (type === 'search') {
      return (
        <div>
          <Heading>Buscar en tumoko.app</Heading>

          <div>
            <ul>1</ul>
            <ul>2</ul>
            <ul>3</ul>
            <ul>4</ul>
            <ul>5</ul>
            <ul>6</ul>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <ContentWithDropdown
      classNameContainer="border-b border-b-woodsmoke-200 text-woodsmoke-50 backdrop-blur-md backdrop-saturate-150 [--bg-from:theme(colors.woodsmoke.950/0.9)] [--bg-to:theme(colors.woodsmoke.950)]"
      classNameContent="min-h-[215px]"
      classNameOverlay="h-screen w-screen"
      content={getCurrentContent(currentContent)}
      onMouseLeave={(evt, setter) => onMouseLeave(evt, setter)}
      variantsContainer={{
        closed: {
          backgroundColor: 'var(--bg-from)',
        },
        open: {
          backgroundColor: 'var(--bg-to)',
        },
      }}
    >
      {({ handleToggle }) => (
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

                <Button
                  className={`flex items-center gap-x-3 text-1`}
                  onClick={(evt) => handleSetSearchContent(evt, handleToggle)}
                >
                  {<SearchIcon width={14} height={14} />}
                </Button>
              </Flex>
            </Flex>
          </Container>
        </Flex>
      )}
    </ContentWithDropdown>
  )
}
