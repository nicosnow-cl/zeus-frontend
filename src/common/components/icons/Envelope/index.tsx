import { Icon, IconProps } from '@chakra-ui/react';
import { Envelope } from 'react-bootstrap-icons';

export interface IProps extends Omit<IconProps, 'as'> {}

const EnvelopeIcon = (props: IProps) => {
  return <Icon {...props} as={Envelope} />;
};

export default EnvelopeIcon;
