import { twMerge } from 'tailwind-merge'
import { forwardRef } from 'react'

import { Colors } from '@/common/types/misc/colors.type'

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  color?: Colors
  glassmorphism?: boolean
  glow?: boolean
  icon?: boolean
  innerRef?: React.ForwardedRef<HTMLButtonElement>
  variant?: 'base' | 'primary' | 'secondary'
}

function Button({
  children,
  className,
  color,
  glassmorphism,
  glow,
  icon,
  innerRef,
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
    <button {...restProps} ref={innerRef} className={classes} data-color={color}>
      <div>{children}</div>
    </button>
  )
}

const ButtonRef = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <Button {...props} innerRef={ref} />
))

ButtonRef.displayName = 'Button'

export { ButtonRef as Button }
