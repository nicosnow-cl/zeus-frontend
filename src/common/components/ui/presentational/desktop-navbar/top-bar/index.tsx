'use client'

import { Button, Flex, Heading, Link, Separator } from '@radix-ui/themes'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

import { BoxArrowRightIcon, PatchCheckFillIcon, SearchIcon } from '@/common/icons'
import { ContentWithDropdown } from '../../../effects/dropdown-effect'
import { Link as NextLink } from '@intl/navigation'
import { Routes } from '@/common/enums/routes'

export type TTopBarProps = {
  logo?: React.ReactNode
}

export function TopBar({ logo }: TTopBarProps) {
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
      classNameContainer="text-woodsmoke-50 backdrop-blur-md backdrop-saturate-150 [--bg-from:theme(colors.woodsmoke.950/0.9)] [--bg-to:theme(colors.woodsmoke.950)]"
      classNameContent="min-h-[215px]"
      classNameOverlay="h-screen w-screen bg-woodsmoke-950/20"
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
        <div className="grid-wrapper h-[44px] bg-transparent">
          <Flex align="center" justify="center" gap="7">
            {logo}

            <Flex className="rounded-md bg-woodsmoke-50/20 px-2 py-1.5 backdrop-blur-md" gap="5">
              <Link className={`flex items-center gap-x-2 text-1 text-woodsmoke-100`} asChild>
                <NextLink href={Routes.Contact}>
                  {t('sidebar.sign-up')}
                  {<PatchCheckFillIcon width={14} height={14} />}
                </NextLink>
              </Link>

              <Separator orientation="vertical" size="1" />

              <Link className={`flex items-center gap-x-2 text-1 text-woodsmoke-100`} asChild>
                <NextLink href={Routes.Home}>
                  {t('sidebar.sign-in')}
                  <BoxArrowRightIcon width={14} height={14} />
                </NextLink>
              </Link>
            </Flex>

            <Link className={`flex items-center gap-x-2 text-1 text-woodsmoke-100`} asChild>
              <NextLink href={Routes.Contact}>{t('sidebar.contact')}</NextLink>
            </Link>

            <Button
              className={`flex items-center gap-x-3 text-1`}
              onClick={(evt) => handleSetSearchContent(evt, handleToggle)}
            >
              {<SearchIcon width={14} height={14} />}
            </Button>
          </Flex>
        </div>
      )}
    </ContentWithDropdown>
  )
}
