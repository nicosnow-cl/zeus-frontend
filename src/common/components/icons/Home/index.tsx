import { Icon, IconProps } from '@chakra-ui/react';
import { House } from 'react-bootstrap-icons';

export interface IProps extends Omit<IconProps, 'as'> {}

const HomeIcon = (props: IProps) => {
  return <Icon {...props} as={House} />;
};

export default HomeIcon;
