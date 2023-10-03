import { BoxArrowRightIcon } from '../../icons/BoxArrowRight';
import { SidebarContainer, SidebarContainerProps } from '../../ui/SidebarContainer';
import { SidebarItem } from '../../ui/SidebarItem';
import EnvelopeIcon from '../../icons/Envelope';
import Routes from '../../../enums/routes';

export interface IProps {
  containerProps?: SidebarContainerProps;
}

const Sidebar = ({ containerProps }: IProps) => {
  return (
    <SidebarContainer {...containerProps}>
      <SidebarItem href={Routes.SignIn} icon={<BoxArrowRightIcon />}>
        Acceso Clientes
      </SidebarItem>
      <SidebarItem href={Routes.Contact} icon={<EnvelopeIcon />}>
        Contacto
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
