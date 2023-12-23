'use client'

import { Link as NextLink } from '@intl/navigation'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import * as Separator from '@radix-ui/react-separator'

import { ArrowRightIcon, BoxArrowRightIcon, PatchCheckFillIcon, SearchIcon } from '@/common/icons'
import { Button } from '@/shadcn-components/ui/button'
import { ContentWithDropdown } from '../../../effects/dropdown-effect'
import { Routes } from '@config/enums'
import { Input } from '@/shadcn-components/ui/input'
import { APP_NAME } from '@config/constants'

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

    // setter(false)
  }

  const getLinks = () => {
    return (
      <>
        <NextLink className="text-1 flex items-center gap-x-2 text-shade-100" href={Routes.Blog}>
          {t('COMMON.sidebar.blog')}
        </NextLink>

        <NextLink className="text-1 flex items-center gap-x-2 text-shade-100" href={Routes.About}>
          {t('COMMON.sidebar.about')}
        </NextLink>

        <NextLink className="text-1 flex items-center gap-x-2 text-shade-100" href={Routes.Contact}>
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
            {getLinks()}

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
      classNameContainer="grid-wrapper absolute top-0 w-full text-shade-50 backdrop-blur-md backdrop-saturate-150 [--bg-from:theme(colors.shade.950/0.8)] [--bg-to:theme(colors.shade.950)] z-50"
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

            <div className="flex gap-5 rounded-md bg-shade-50/20 px-2 py-1.5 backdrop-blur-md">
              <NextLink
                className="text-1 flex items-center gap-x-2 text-shade-100"
                href={Routes.SignUp}
              >
                {t('COMMON.sidebar.sign-up')}
                {<PatchCheckFillIcon width={14} height={14} />}
              </NextLink>

              <Separator.Root className="separator-root" orientation="vertical" decorative />

              <NextLink
                className="text-1 flex items-center gap-x-2 text-shade-100"
                href={Routes.SignIn}
              >
                {t('COMMON.sidebar.sign-in')}
                <BoxArrowRightIcon width={14} height={14} />
              </NextLink>
            </div>

            <div className="hidden gap-5 md:flex">{getLinks()}</div>

            <Button
              className={`text-1 flex items-center gap-x-3`}
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
