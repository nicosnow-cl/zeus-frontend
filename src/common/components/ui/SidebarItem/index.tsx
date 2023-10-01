import NextLink from 'next/link';

import { SidebarLink } from '../SidebarLink';

export interface IProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const SidebarItem = ({ href, children, icon }: IProps) => {
  return (
    <SidebarLink as={NextLink} href={href}>
      {icon}
      {children}
    </SidebarLink>
  );
};
