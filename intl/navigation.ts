import { createSharedPathnamesNavigation } from 'next-intl/navigation'

import { getLocalesValues } from './locale'

export const locales = getLocalesValues()

export const localePrefix = 'as-needed'

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
})
