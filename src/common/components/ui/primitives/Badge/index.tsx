import { twMerge } from 'tailwind-merge'

export type Colors =
  | 'brand'
  | 'accent'
  | 'shade'
  | 'elite'
  | 'pro'
  | 'prime'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'

export type BadgeProps = React.ComponentProps<'div'> & {
  color?: Colors
  small?: boolean
}

export function Badge(props: BadgeProps) {
  const { color, small, className, ...restProps } = props
  const classes = twMerge('badge', !small ? 'font-semibold' : 'text-sm', className)

  return <div {...restProps} className={classes} data-color={color} />
}
