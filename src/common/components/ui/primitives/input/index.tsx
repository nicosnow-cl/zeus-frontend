import { Input as ShadcnInput } from '@/shadcn-components/ui/input'
import { twMerge } from 'tailwind-merge'

import { CSS } from '@/common/utils/css-classes'

export type InputProps = React.ComponentPropsWithoutRef<typeof ShadcnInput> & {
  glassmorphism?: boolean
}

export function Input({ className, glassmorphism, ...restProps }: InputProps) {
  const classes = twMerge(CSS.input, glassmorphism ? CSS.glassmorphism : '', className)

  return <ShadcnInput {...restProps} className={classes} />
}
