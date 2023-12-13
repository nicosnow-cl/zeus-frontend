'use client'

import * as Separator from '@radix-ui/react-separator'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

import { BoxArrowRightIcon, PatchCheckFillIcon, SearchIcon } from '@/common/icons'
import { ContentWithDropdown } from '../../../effects/dropdown-effect'
import { Link as NextLink } from '@intl/navigation'
import { Routes } from '@config/enums'
import { Button } from '@/shadcn-components/ui/button'

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

  const getCurrentContent = (type: 'search') => {
    if (type === 'search') {
      return (
        <div>
          <h3>Buscar en tumoko.app</h3>

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
      classNameContainer="absolute w-full text-shade-50 backdrop-blur-md backdrop-saturate-150 [--bg-from:theme(colors.shade.950/0.9)] [--bg-to:theme(colors.shade.950)] z-50"
      classNameContent="min-h-[215px]"
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
        <div className="grid-wrapper h-[var(--navbar-top-height)] w-full bg-transparent">
          <div className="flex items-center justify-center gap-7">
            {logo}

            <div className="flex gap-5 rounded-md bg-shade-50/20 px-2 py-1.5 backdrop-blur-md">
              <NextLink
                className="flex items-center gap-x-2 text-1 text-shade-100"
                href={Routes.SignUp}
              >
                {t('sidebar.sign-up')}
                {<PatchCheckFillIcon width={14} height={14} />}
              </NextLink>

              <Separator.Root orientation="vertical" />

              <NextLink
                className="flex items-center gap-x-2 text-1 text-shade-100"
                href={Routes.SignIn}
              >
                {t('sidebar.sign-in')}
                <BoxArrowRightIcon width={14} height={14} />
              </NextLink>
            </div>

            <NextLink
              className="flex items-center gap-x-2 text-1 text-shade-100"
              href={Routes.Blog}
            >
              {t('sidebar.blog')}
            </NextLink>

            <NextLink
              className="flex items-center gap-x-2 text-1 text-shade-100"
              href={Routes.About}
            >
              {t('sidebar.about')}
            </NextLink>

            <NextLink
              className="flex items-center gap-x-2 text-1 text-shade-100"
              href={Routes.Contact}
            >
              {t('sidebar.contact')}
            </NextLink>

            <Button
              className={`flex items-center gap-x-3 text-1`}
              onClick={(evt) => handleSetSearchContent(evt, handleToggle)}
            >
              {<SearchIcon width={14} height={14} />}
            </Button>
          </div>
        </div>
      )}
    </ContentWithDropdown>
  )
}
