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

export type BadgeProps = React.ComponentProps<'span'> & {
  color?: Colors
  small?: boolean
}

export function Badge(props: BadgeProps) {
  const { color, small, className, ...restProps } = props
  const classes = twMerge(className, 'badge', !small ? 'text-sm font-semibold' : 'text-xs')

  return <span {...restProps} className={classes} data-color={color} />
}
