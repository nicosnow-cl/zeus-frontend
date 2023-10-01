import { Icon, IconProps } from '@chakra-ui/react';

import LogoSvg from '../../../../../public/icons/logo.svg';

export interface IProps extends Omit<IconProps, 'as'> {}

const LogoIcon = (props: IProps) => {
  return <Icon {...props} as={LogoSvg} />;
};

export default LogoIcon;
