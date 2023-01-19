import { ReactNode } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import NavigateNext from '@mui/icons-material/NavigateNext';
import Typography from '@mui/material/Typography';

import LogoIcon from '../../custom-icons/LogoIcon';

export interface IBreadcrumbProps {
  crumbs: { label: string; href?: string }[];
  startIcon?: ReactNode;
  startLink?: string;
}

const Breadcrumb = ({
  crumbs,
  startIcon = <LogoIcon fontSize="large" />,
  startLink = '/',
}: IBreadcrumbProps) => {
  const getBreadcrumb = () => {
    return [
      <Link key={0} href={startLink}>
        {startIcon}
      </Link>,
      ...crumbs.map((crumb, idx) =>
        idx < crumbs.length - 1 ? (
          <Link key={idx + 1} href={crumb.href ?? '/'}>
            {crumb.label}
          </Link>
        ) : (
          <Typography key={idx + 1}>{crumb.label}</Typography>
        ),
      ),
    ];
  };

  return (
    <Breadcrumbs
      className={`mb-2`}
      separator={<NavigateNext fontSize="small" />}
      aria-label="web-breadcrumb"
      style={{ color: 'inherit' }}
    >
      {getBreadcrumb()}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
