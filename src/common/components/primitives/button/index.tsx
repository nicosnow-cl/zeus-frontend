import { twMerge } from 'tailwind-merge'

import { CSS } from '@/common/utils/css-classes'
import { Colors } from '@/common/types/misc/colors.type'

const { Utilities } = CSS

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  color?: Colors
  glassmorphism?: boolean
  icon?: boolean
}

export function Button({
  color,
  className,
  children,
  glassmorphism,
  icon,
  ...restProps
}: ButtonProps) {
  const classes = twMerge(
    'btn',
    glassmorphism ? Utilities.glassmorphism : '',
    icon ? 'aspect-square p-2' : '',
    className
  )

  return (
    <button {...restProps} className={classes} data-color={color}>
      {children}
    </button>
  )
}
