import { Icon, IconProps } from '@chakra-ui/react';
import { Sun } from 'react-bootstrap-icons';

export interface IProps extends Omit<IconProps, 'as'> {}

const SunIcon = (props: IProps) => {
  return <Icon {...props} as={Sun} />;
};

export default SunIcon;
