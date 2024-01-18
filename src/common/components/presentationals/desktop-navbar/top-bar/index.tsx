'use client'

import { Link as NextLink } from '@intl/navigation'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'

import { actionFetchByName } from '@/common/actions/users/fetch-by-name'
import { APP_NAME } from '@config/constants'
import {
  ArrowRightIcon,
  BoxArrowRightIcon,
  ListIcon,
  PatchCheckFillIcon,
  PersonFillIcon,
  SearchIcon,
} from '@/common/icons'
import { Button } from '@/common/components/primitives/button'
import { ContentWithDropdown } from '../../../misc/dropdown-effect'
import { InputSearch } from '@/common/components/primitives/input-search'
import { Routes } from '@config/enums'
import { Separator } from '@/common/components/primitives/separator'
import { useDebounce } from '@/common/hooks/use-debounce'
import { useQuery } from '@tanstack/react-query'
import * as ButtonGroup from '../../../compounds/button-group'
import { UserHoverCard } from '@/features/home/components/presentationals/user-hover-card'

export type TopBarProps = {
  framerContaineClassName?: string
  logo?: React.ReactNode
}

const ROUTES = [Routes.Blog, Routes.About, Routes.Contact]

export function TopBar({ framerContaineClassName, logo }: Readonly<TopBarProps>) {
  const framerContainerClasses = twMerge(
    'grid-wrapper absolute top-0 w-full z-50',
    framerContaineClassName
  )

  const [searchValue, setSearchValue] = useState('')
  const name = useDebounce(searchValue)
  const t = useTranslations()

  const { data: suggestions } = useQuery({
    queryKey: ['search-suggestions', name],
    queryFn: () => actionFetchByName(name),
    enabled: name.length > 0,
    select: (data) => (data.status === 'success' ? data.data : []),
  })

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

        {suggestions && suggestions.length > 0 && (
          <div className="text-sm text-gray-500">
            <span className="mt-5">{t('COMMON.compounds.navbar.suggested-links')}</span>

            <ul className="flex flex-col gap-1">
              {suggestions.map((suggestion, idx) => (
                <li key={idx}>
                  <UserHoverCard user={suggestion}>
                    <NextLink
                      className="flex items-center gap-3 rounded-md p-2 transition-[background] hover:bg-gray-50/20"
                      href={Routes.Blog}
                    >
                      <PersonFillIcon size={16} />
                      {suggestion.name}
                    </NextLink>
                  </UserHoverCard>
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
                Iniciar sesión
              </NextLink>
            </li>
            <li>
              <NextLink
                className="flex items-center gap-3 rounded-md p-2 transition-[background] hover:bg-gray-50/20"
                href={Routes.Blog}
              >
                <ArrowRightIcon size={16} />
                Registrarse
              </NextLink>
            </li>
            <li>
              <NextLink
                className="flex items-center gap-3 rounded-md p-2 transition-[background] hover:bg-gray-50/20"
                href={Routes.Blog}
              >
                <ArrowRightIcon size={16} />
                Contacto
              </NextLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <ContentWithDropdown
      classNameContainer={framerContainerClasses}
      classNameContent="min-h-screen md:min-h-0"
      content={getCurrentContent()}
      onMouseLeave={(evt, setter) => onMouseLeave(evt, setter)}
      variantsContainer={{
        closed: { backgroundColor: 'var(--bg-from)' },
        open: { backgroundColor: 'var(--bg-to)' },
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
