import { forwardRef } from 'react'
import { Input as ShadcnInput } from '@/shadcn-components/ui/input'
import { twMerge } from 'tailwind-merge'

import { CSS } from '@/common/utils/css-classes'

const { Primitives, Utilities } = CSS

export type InputProps = React.ComponentPropsWithoutRef<typeof ShadcnInput> & {
  glassmorphism?: boolean
  innerRef?: React.ForwardedRef<HTMLInputElement>
}

function Input({ className, glassmorphism, innerRef, ...restProps }: InputProps) {
  const classes = twMerge(
    Primitives.Inputs.input,
    glassmorphism && Utilities.glassmorphism,
    className
  )

  return <ShadcnInput {...restProps} ref={innerRef} className={classes} />
}

const InputRef = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input {...props} innerRef={ref} />
))

InputRef.displayName = 'Input'

export { InputRef as Input }
