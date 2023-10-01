import { SidebarContainer, SidebarContainerProps } from '../../ui/SidebarContainer';
import { SidebarItem } from '../../ui/SidebarItem';
import DoorOpenIcon from '../../icons/DoorOpen';

export interface IProps {
  containerProps?: SidebarContainerProps;
}

const Sidebar = ({ containerProps }: IProps) => {
  return (
    <SidebarContainer {...containerProps}>
      <SidebarItem href="/clients" icon={<DoorOpenIcon />}>
        Acceso Clientes
      </SidebarItem>
      {/* <Heading>Contacto</Heading> */}
    </SidebarContainer>
  );
};

export default Sidebar;
