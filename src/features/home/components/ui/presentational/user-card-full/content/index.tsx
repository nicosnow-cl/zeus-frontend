import clsx from 'clsx'

export type ContentProps = React.ComponentPropsWithoutRef<'div'>

export const Content = ({ className = '', children, ...restProps }: ContentProps) => {
  const classes = clsx({
    'bg-white p-6 border border-gray-200 dark:border-gray-800 dark:bg-gray-950': true,
    [className]: true,
  })

  return (
    <div {...restProps} className={classes}>
      {children}
    </div>
  )
}
