'use client'

import { Link as NextLink } from '@intl/navigation'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import * as Separator from '@radix-ui/react-separator'

import { APP_NAME } from '@config/constants'
import { ArrowRightIcon, BoxArrowRightIcon, PatchCheckFillIcon, SearchIcon } from '@/common/icons'
import { Button } from '@/shadcn-components/ui/button'
import { ContentWithDropdown } from '../../../effects/dropdown-effect'
import { Input } from '@/shadcn-components/ui/input'
import { Routes } from '@config/enums'
import * as ButtonGroup from '../../../../compounds/button-group'

export type TopBarProps = {
  logo?: React.ReactNode
}

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

  const getLinks = (className: string = '') => {
    return (
      <>
        <NextLink
          className={`flex items-center gap-x-2 text-shade-100 ${className}`}
          href={Routes.Blog}
        >
          {t('COMMON.sidebar.blog')}
        </NextLink>

        <NextLink
          className={`flex items-center gap-x-2 text-shade-100 ${className}`}
          href={Routes.About}
        >
          {t('COMMON.sidebar.about')}
        </NextLink>

        <NextLink
          className={`flex items-center gap-x-2 text-shade-100 ${className}`}
          href={Routes.Contact}
        >
          {t('COMMON.sidebar.contact')}
        </NextLink>
      </>
    )
  }

  const getCurrentContent = (type: 'search') => {
    if (type === 'search') {
      return (
        <div className="flex flex-col gap-5 p-5">
          <div className="flex flex-col gap-5 md:hidden">
            {getLinks('text-lg')}

            <Separator.Root className="separator-root" orientation="horizontal" decorative />
          </div>

          <div className="flex items-center gap-3">
            <SearchIcon size={20} />

            <Input
              className="border-none py-5 text-2xl shadow-none"
              type="text"
              placeholder={`Buscar en ${APP_NAME}...`}
            />
          </div>

          <div className="text-sm">
            <span className="mt-5 text-gray-500 ">Enlaces rápidos...</span>

            <ul className="flex flex-col gap-1">
              <li>
                <NextLink
                  className="flex items-center gap-3 rounded-md p-2 transition-[background] hover:bg-gray-50/20"
                  href={Routes.Blog}
                >
                  <ArrowRightIcon size={16} />
                  Blog
                </NextLink>
              </li>
              <li>
                <NextLink
                  className="flex items-center gap-3 rounded-md p-2 transition-[background] hover:bg-gray-50/20"
                  href={Routes.Blog}
                >
                  <ArrowRightIcon size={16} />
                  Blog
                </NextLink>
              </li>
              <li>
                <NextLink
                  className="flex items-center gap-3 rounded-md p-2 transition-[background] hover:bg-gray-50/20"
                  href={Routes.Blog}
                >
                  <ArrowRightIcon size={16} />
                  Blog
                </NextLink>
              </li>
            </ul>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <ContentWithDropdown
      classNameContainer="grid-wrapper glassmorphism absolute top-0 w-full [--bg-from:theme(colors.shade.950/0.8)] [--bg-to:theme(colors.shade.950)] z-50 shadow-none border-0 border-b"
      classNameContent="min-h-screen md:min-h-0"
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
        <div className="grid-wrapper h-[var(--navbar-top-height)] w-full bg-transparent text-sm">
          <div className="flex items-center justify-center gap-5">
            {logo}

            <ButtonGroup.Root className="bg-shade-200/10 dark:bg-shade-300/10">
              <ButtonGroup.Link
                label={t('COMMON.sidebar.sign-up')}
                href={Routes.SignUp}
                icon={<PatchCheckFillIcon className="text-base" />}
              />
              <ButtonGroup.Link
                label={t('COMMON.sidebar.sign-in')}
                href={Routes.SignIn}
                icon={<BoxArrowRightIcon className="text-base" />}
              />
            </ButtonGroup.Root>

            <div className="hidden gap-5 md:flex">{getLinks()}</div>

            <Button
              className={`flex items-center gap-x-3`}
              onClick={(evt) => handleSetSearchContent(evt, handleToggle)}
            >
              {<SearchIcon className="text-base" />}
            </Button>
          </div>
        </div>
      )}
    </ContentWithDropdown>
  )
}
