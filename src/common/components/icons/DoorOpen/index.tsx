import { Icon, IconProps } from '@chakra-ui/react';
import { DoorOpen } from 'react-bootstrap-icons';

export interface IProps extends Omit<IconProps, 'as'> {}

const DoorOpenIcon = (props: IProps) => {
  return <Icon {...props} as={DoorOpen} />;
};

export default DoorOpenIcon;
