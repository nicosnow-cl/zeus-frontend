import { APP_NAME } from '@config/constants'
import { Crumb } from '../types/misc/crumb.type'
import { HouseFillIcon } from '../icons'
import { Routes } from '@config/enums'

const DEFAULT_CRUMB: Crumb = {
  code: 'root',
  href: Routes.Root,
  icon: <HouseFillIcon />,
  label: APP_NAME,
}

export const getPathCrumbs = (pathname: string): Crumb[] => {
  const pathnameWithouthQuery = pathname.split('?')[0]
  const pathnameArr = pathnameWithouthQuery.split('/').filter((path) => path.length > 0)

  const breadcrumbArr = pathnameArr.map((path) => ({ code: path, href: `/${path}`, label: path }))

  return [DEFAULT_CRUMB, ...breadcrumbArr]
}
