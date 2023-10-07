import { Icon, IconProps } from '@chakra-ui/react';
import { BoxArrowRight } from 'react-bootstrap-icons';

export interface IProps extends Omit<IconProps, 'as'> {}

export const BoxArrowRightIcon = (props: IProps) => {
  return <Icon {...props} as={BoxArrowRight} />;
};
