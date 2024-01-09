import { twMerge } from 'tailwind-merge'

import { Colors } from '@/common/types/misc/colors.type'

export type BadgeProps = React.ComponentProps<'div'> & {
  color?: Colors
  small?: boolean
}

export function Badge(props: BadgeProps) {
  const { color, small, className, ...restProps } = props
  const classes = twMerge('badge', !small ? 'font-semibold' : 'text-sm', className)

  return <div {...restProps} className={classes} data-color={color} />
}
