import { Icon, IconProps } from '@chakra-ui/react';
import { Coin } from 'react-bootstrap-icons';

export interface IProps extends Omit<IconProps, 'as'> {}

export const CoinIcon = (props: IProps) => {
  return <Icon {...props} as={Coin} />;
};
