import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import { Locales } from './locales';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: Object.entries(Locales).map(([_, value]) => value),
});
