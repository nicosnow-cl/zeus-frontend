import { twMerge } from 'tailwind-merge'

export type RootProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'ref'>

export function Root({ className, children, ...restProps }: RootProps) {
  const classes = twMerge(
    'flex rounded-2xl bg-shade-50/20 overflow-hidden shadow button-group',
    className
  )

  return (
    <div {...restProps} className={classes}>
      {children}
    </div>
  )
}
