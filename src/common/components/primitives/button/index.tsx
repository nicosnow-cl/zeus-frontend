import { twMerge } from 'tailwind-merge'

import { Colors } from '@/common/types/misc/colors.type'

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  color?: Colors
  glassmorphism?: boolean
  glow?: boolean
  icon?: boolean
  variant?: 'primary' | 'secondary'
}

export function Button({
  color,
  className,
  children,
  glassmorphism,
  glow,
  icon,
  variant,
  ...restProps
}: ButtonProps) {
  const classes = twMerge(
    'btn',
    variant === 'secondary' && 'secondary',
    icon && 'icon',
    glassmorphism && 'glassmorphism',
    glow && 'glow',
    className
  )

  return (
    <button {...restProps} className={classes} data-color={color}>
      <div>{children}</div>
    </button>
  )
}
