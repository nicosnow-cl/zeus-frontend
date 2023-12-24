import { twMerge } from 'tailwind-merge'

export type TitleProps = React.ComponentPropsWithoutRef<'p'>

export function Title({ children, className, ...restProps }: TitleProps) {
  const classes = twMerge('hero-title', className)

  return (
    <p {...restProps} className={classes}>
      {children}
    </p>
  )
}
