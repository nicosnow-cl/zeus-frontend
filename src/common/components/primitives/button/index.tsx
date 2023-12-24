import { twMerge } from 'tailwind-merge'

export type ButtonProps = React.ComponentPropsWithoutRef<'button'>

export function Button({ className, children, ...restProps }: ButtonProps) {
  const classes = twMerge(className, 'btn')

  return (
    <button {...restProps} className={classes}>
      {children}
    </button>
  )
}
