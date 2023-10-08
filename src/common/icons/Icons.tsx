import { Icon, IconProps } from '@chakra-ui/react';

import * as icons from './all-icons';

const Icons = Object.entries(icons).reduce((acc, [name, IconComponent]) => {
  acc[name] = (props) => <Icon as={IconComponent} {...props} />;

  return acc;
}, {} as Record<string, React.FC<IconProps>>);

export default Icons;
