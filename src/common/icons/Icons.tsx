import { Icon } from 'react-bootstrap-icons';

import * as bootstrapIcons from './bootstrap-icons';
import * as customIcons from './custom-icons';

const mappedCustomIcons = Object.entries(customIcons).reduce((acc, [name, Icon]) => {
  acc[name] = (props) => <Icon width="1em" height="1em" fill="currentColor" {...props} />;

  return acc;
}, {} as Record<string, React.FC<Icon>>);

const Icons = Object.entries({ ...bootstrapIcons, ...mappedCustomIcons }).reduce(
  (acc, [name, Icon]) => {
    acc[`${name}Icon`] = (props) => <Icon {...props} />;

    return acc;
  },
  {} as Record<string, Icon>,
);

export default Icons;
