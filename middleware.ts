import createMiddleware from 'next-intl/middleware'

import { DEFAULT_LOCALE } from '@config/constants'
import { getLocalesValues } from '@intl/locale'

export default createMiddleware({
  locales: getLocalesValues(),
  defaultLocale: DEFAULT_LOCALE,
})

export const config = {
  // matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
  matcher: ['/', '/(en|es)/:path*'],
}
