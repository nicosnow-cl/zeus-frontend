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
  | 'esmerald'
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

export type BadgeProps = React.ComponentProps<'span'> & {
  color?: Colors
}

export function Badge(props: BadgeProps) {
  const { color, className, ...restProps } = props
  const classes = twMerge('badge', className)

  return <span className={classes} {...restProps} data-color={color} />
}
