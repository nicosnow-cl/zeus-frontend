import { createSharedPathnamesNavigation } from 'next-intl/navigation'

import { Locale } from './locale'

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: Object.entries(Locale).map(([_, value]) => value),
})
