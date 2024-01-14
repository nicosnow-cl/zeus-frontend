'use client'

import { Link as NextLink } from '@intl/navigation'
import { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { actionFetchByName } from '@/common/actions/users/fetch-by-name'
import { APP_NAME } from '@config/constants'
import {
  ArrowRightIcon,
  BoxArrowRightIcon,
  ListIcon,
  PatchCheckFillIcon,
  SearchIcon,
} from '@/common/icons'
import { Button } from '@/common/components/primitives/button'
import { ContentWithDropdown } from '../../../misc/dropdown-effect'
import { InputSearch } from '@/common/components/primitives/input-search'
import { Routes } from '@config/enums'
import { Separator } from '@/common/components/primitives/separator'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import * as ButtonGroup from '../../../compounds/button-group'

export type TopBarProps = {
  logo?: React.ReactNode
}

const ROUTES = [Routes.Blog, Routes.About, Routes.Contact]

export function TopBar({ logo }: Readonly<TopBarProps>) {
  const [searchValue, setSearchValue] = useState('')
  const [suggestions, setSuggestions] = useState<UserCardEntity[]>([])
  const t = useTranslations()

  const handleSearchValueChange = (value: string) => setSearchValue(value)

  const handleSetSearchContent = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    handler: (value?: boolean | undefined) => void
  ) => {
    evt.preventDefault()
    evt.stopPropagation()

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

  const getLinks = (className: string = '') =>
    ROUTES.map((route, idx) => {
      const tKEY = route.replace('/', '')

      return (
        <NextLink
          key={idx}
          className={`flex items-center gap-x-2 text-shade-100 ${className}`}
          href={route}
        >
          {t(`COMMON.route-names.${tKEY}`)}
        </NextLink>
      )
    })

  const getCurrentContent = () => {
    return (
      <div className="flex flex-col gap-5 p-5">
        <div className="flex flex-col gap-5 md:hidden">
          {getLinks('text-lg')}

          <Separator orientation="horizontal" decorative />
        </div>

        <div className="flex items-center gap-3 text-shade-100">
          <SearchIcon size={20} />

          <InputSearch
            containerProps={{
              className: 'w-full',
            }}
            inputProps={{
              className: 'text-2xl',
              placeholder: t('COMMON.compounds.navbar.input-search.placeholder', {
                name: APP_NAME,
              }),
            }}
            value={searchValue}
            onChange={handleSearchValueChange}
          />
        </div>

        {suggestions.length > 0 && (
          <div className="text-sm text-gray-500">
            <span className="mt-5">{t('COMMON.compounds.navbar.suggested-links')}</span>

            <ul className="flex flex-col gap-1">
              {suggestions.map((suggestion, idx) => (
                <li key={idx}>
                  <NextLink
                    className="flex items-center gap-3 rounded-md p-2 transition-[background] hover:bg-gray-50/20"
                    href={Routes.Blog}
                  >
                    <ArrowRightIcon size={16} />
                    {suggestion.name}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="text-sm text-gray-500">
          <span className="mt-5">{t('COMMON.compounds.navbar.quick-links')}</span>

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

  const fetchMoreData = useCallback(async (name: string) => {
    // setIsLoading(true)

    const res = await actionFetchByName(name)

    if (res.status === 'error') return
    else if (res.data) setSuggestions(Array.isArray(res.data) ? res.data : [res.data])

    // setTimeout(() => setIsLoading(false), 250)
  }, [])

  useEffect(() => {
    if (!searchValue) setSuggestions([])
    else fetchMoreData(searchValue)
  }, [searchValue, fetchMoreData])

  return (
    <ContentWithDropdown
      classNameContainer="grid-wrapper glassmorphism absolute top-0 w-full [--bg-from:theme(colors.shade.950/0.8)] [--bg-to:theme(colors.shade.950)] z-50 border-none"
      classNameContent="min-h-screen md:min-h-0"
      content={getCurrentContent()}
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

            <ButtonGroup.Root className="bg-shade-950/30 dark:bg-shade-300/10">
              <ButtonGroup.Link
                label={t('COMMON.route-names.sign-up')}
                href={Routes.SignUp}
                icon={<PatchCheckFillIcon className="hidden text-base sm:block" />}
              />
              <ButtonGroup.Link
                label={t('COMMON.route-names.sign-in')}
                href={Routes.SignIn}
                icon={<BoxArrowRightIcon className="hidden text-base sm:block" />}
              />
            </ButtonGroup.Root>

            <div className="hidden gap-5 md:flex">{getLinks()}</div>

            <Button onClick={(evt) => handleSetSearchContent(evt, handleToggle)} color="shade" icon>
              {<SearchIcon className="hidden text-base md:block" />}
              {<ListIcon className="block text-base md:hidden" />}
            </Button>
          </div>
        </div>
      )}
    </ContentWithDropdown>
  )
}
