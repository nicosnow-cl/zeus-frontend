import { Icon } from 'react-bootstrap-icons'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'

import * as bootstrapIcons from './bootstrap-icons'
import * as customIcons from './custom-icons'

export type IconProps = React.ComponentProps<Icon> &
  Partial<React.ComponentProps<typeof AccessibleIcon.Root>>

const mappedCustomIcons = Object.entries(customIcons).reduce(
  (acc, [name, Icon]) => {
    acc[name] = (props) => <Icon width="1rem" height="1rem" fill="currentColor" {...props} />

    return acc
  },
  {} as Record<string, React.FC<Icon>>
)

const Icons = Object.entries({ ...bootstrapIcons, ...mappedCustomIcons }).reduce(
  (acc, [name, Icon]) => {
    acc[`${name}Icon`] = ({ label, ...restProps }: IconProps) => (
      <AccessibleIcon.Root label={label ?? name}>
        <Icon {...restProps} />
      </AccessibleIcon.Root>
    )

    return acc
  },
  {} as Record<string, React.FunctionComponent<IconProps>>
)

export default Icons
