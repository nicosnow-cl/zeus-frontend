import createMiddleware from 'next-intl/middleware';

import { Locales } from './intl/locales';

const locales = Object.values(Locales) as string[];

export default createMiddleware({
  locales,
  defaultLocale: locales[0],
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
