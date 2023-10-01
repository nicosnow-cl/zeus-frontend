import { Icon, IconProps } from '@chakra-ui/react';
import { Moon } from 'react-bootstrap-icons';

export interface IProps extends Omit<IconProps, 'as'> {}

const MoonIcon = (props: IProps) => {
  return <Icon {...props} as={Moon} />;
};

export default MoonIcon;
