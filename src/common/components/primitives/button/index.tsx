import { twMerge } from 'tailwind-merge'

import { Colors } from '@/common/types/misc/colors.type'

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  color?: Colors
  glassmorphism?: boolean
  glow?: boolean
  icon?: boolean
  variant?: 'base' | 'primary' | 'secondary'
}

export function Button({
  children,
  className,
  color,
  glassmorphism,
  glow,
  icon,
  variant = 'primary',
  ...restProps
}: ButtonProps) {
  const classes = twMerge(
    'btn',
    variant !== 'base' && variant,
    icon && 'icon',
    glassmorphism && 'glassmorphism',
    glow && 'glow'
  )

  return (
    <button {...restProps} className={classes} data-color={color}>
      <div>{children}</div>
    </button>
  )
}
