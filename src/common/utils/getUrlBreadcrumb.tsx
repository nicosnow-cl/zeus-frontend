import { HouseIcon } from '../icons'
import { ICrumb } from '../interfaces/crumb.interface'
import { Routes } from '../enums'

const DEFAULT_CRUMB: ICrumb = {
  code: 'home',
  href: Routes.Home,
  icon: <HouseIcon />,
  label: '',
}

export const getUrlBreadcrumb = (pathname: string): ICrumb[] => {
  const pathnameWithouthQuery = pathname.split('?')[0]
  const pathnameArr = pathnameWithouthQuery.split('/').filter((path) => path.length > 0)

  const breadcrumbArr = pathnameArr.map((path) => {
    const href = `/${path}`

    return { code: path, href, label: path }
  })

  return [DEFAULT_CRUMB, ...breadcrumbArr]
}
