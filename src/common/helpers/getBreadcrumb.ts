import Routes from '../enums/routes';

interface IBreadcrumb {
  code: string;
  href: string;
}

const DEFAULT_CRUMB: IBreadcrumb = {
  code: 'home',
  href: Routes.Home,
};

const getBreadcrumb = (pathname: string): IBreadcrumb[] => {
  const pathnameWithouthQuery = pathname.split('?')[0];
  const pathnameArr = pathnameWithouthQuery.split('/').filter((path) => path.length > 0);

  const breadcrumbArr = pathnameArr.map((path) => {
    const href = `/${path}`;

    return { href, code: path };
  });

  return [DEFAULT_CRUMB, ...breadcrumbArr];
};

export default getBreadcrumb;
