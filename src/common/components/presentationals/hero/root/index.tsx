import { twMerge } from 'tailwind-merge'

export type RootProps = React.ComponentPropsWithoutRef<'section'>

export function Root({ children, className, ...restProps }: RootProps) {
  const classes = twMerge('hero', className)

  return (
    <section {...restProps} className={classes}>
      {children}
    </section>
  )
}
