import { Input as ShadcnInput } from '@/shadcn-components/ui/input'
import { twMerge } from 'tailwind-merge'

import { CSS } from '@/common/utils/css-classes'

const { Primitives, Utilities } = CSS

export type InputProps = React.ComponentPropsWithoutRef<typeof ShadcnInput> & {
  glassmorphism?: boolean
}

export function Input({ className, glassmorphism, ...restProps }: InputProps) {
  const classes = twMerge(
    Primitives.Inputs.input,
    glassmorphism && Utilities.glassmorphism,
    className
  )

  return <ShadcnInput {...restProps} className={classes} />
}
