import { twMerge } from 'tailwind-merge'

import { CSS } from '@/common/utils/css-classes'
import { Colors } from '@/common/types/misc/colors.type'

const { Utilities } = CSS

export type ColorButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  color?: Colors
  glassmorphism?: boolean
}

export function ColorButton({
  children,
  className,
  color,
  glassmorphism,
  ...restProps
}: ColorButtonProps) {
  const classes = twMerge('btn', glassmorphism ? Utilities.glassmorphism : '', className)

  return (
    <button {...restProps} className={classes} data-color={!glassmorphism && color}>
      {children}
    </button>
  )
}
