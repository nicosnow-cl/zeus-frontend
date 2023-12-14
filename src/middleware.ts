import createMiddleware from 'next-intl/middleware'

import { DEFAULT_LOCALE } from '@config/constants'
import { locales, localePrefix } from '@intl/navigation'

export default createMiddleware({
  defaultLocale: DEFAULT_LOCALE,
  localePrefix,
  locales,
})

export const config = {
  // matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
  matcher: ['/((?!_next|.*\\..*).*)'], // Skip all paths that should not be internationalized
  // matcher: ['/', '/(es|en)/:path*'],
}
