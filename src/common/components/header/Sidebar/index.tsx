import { useTranslations } from 'next-intl';

import { SidebarContainer, SidebarContainerProps } from '../../ui/SidebarContainer';
import { SidebarItem } from '../../ui/SidebarItem';
import { Routes } from '@/common/enums';
import { BoxArrowRightIcon, EnvelopeIcon } from '@/common/icons';

export interface IProps {
  containerProps?: SidebarContainerProps;
}

const Sidebar = ({ containerProps }: IProps) => {
  const t = useTranslations();

  return (
    <SidebarContainer {...containerProps}>
      <SidebarItem href={Routes.SignIn} icon={<BoxArrowRightIcon />}>
        {t('sidebar.sign-in')}
      </SidebarItem>
      <SidebarItem href={Routes.Contact} icon={<EnvelopeIcon />}>
        {t('sidebar.contact')}
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
