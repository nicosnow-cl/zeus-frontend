import { useTranslations } from 'next-intl';

import { BoxArrowRightIcon } from '../../icons/BoxArrowRight';
import { SidebarContainer, SidebarContainerProps } from '../../ui/SidebarContainer';
import { SidebarItem } from '../../ui/SidebarItem';
import EnvelopeIcon from '../../icons/Envelope';
import Routes from '../../../enums/routes';

export interface IProps {
  containerProps?: SidebarContainerProps;
}

const Sidebar = ({ containerProps }: IProps) => {
  const t = useTranslations('common');

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
