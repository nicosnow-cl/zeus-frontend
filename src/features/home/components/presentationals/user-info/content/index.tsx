import { twMerge } from 'tailwind-merge'

export type ContentProps = React.ComponentPropsWithoutRef<'div'>

export const Content = ({ className = '', children, ...restProps }: ContentProps) => {
  const classes = twMerge(
    'relative flex flex-col gap-2 bg-shade-100 px-2 py-3 dark:bg-shade-950',
    className
  )

  return (
    <div {...restProps} className={classes}>
      {children}
    </div>
  )
}
