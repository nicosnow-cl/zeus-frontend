import { twMerge } from 'tailwind-merge'

export type RootProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'ref'>

export function Root({ className, children, ...restProps }: RootProps) {
  const classes = twMerge('btn-group glassmorphism', className)

  return (
    <div {...restProps} className={classes}>
      {children}
    </div>
  )
}
