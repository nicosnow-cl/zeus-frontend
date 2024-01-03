import { Button as ShadcnButton } from '@/shadcn-components/ui/button'
import { twMerge } from 'tailwind-merge'

import { CSS } from '@/common/utils/css-classes'

const { Primitives, Utilities } = CSS

export type ButtonProps = React.ComponentPropsWithoutRef<typeof ShadcnButton> & {
  glassmorphism?: boolean
}

export function Button({ className, children, glassmorphism, ...restProps }: ButtonProps) {
  const classes = twMerge(
    Primitives.button,
    'btn',
    glassmorphism ? Utilities.glassmorphism : '',
    className
  )

  return (
    <ShadcnButton {...restProps} className={classes}>
      {children}
    </ShadcnButton>
  )
}
