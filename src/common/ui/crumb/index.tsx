import { Link } from '@radix-ui/themes';
import NextLink from 'next/link';

import { ICrumb } from '@/common/interfaces/crumb.interface';

export interface IProps {
  crumb: ICrumb;
}
export const Crumb = ({ crumb }: IProps) => (
  <li className="inline-flex items-center">
    <Link className={`inline-flex items-center`} highContrast asChild>
      <NextLink href={crumb.href}>
        {crumb.icon}
        {crumb.label}
      </NextLink>
    </Link>
  </li>
);
