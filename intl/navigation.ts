import { createSharedPathnamesNavigation } from 'next-intl/navigation'

import { Locale } from '@config/enums'

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: Object.entries(Locale).map(([_, value]) => value),
})
