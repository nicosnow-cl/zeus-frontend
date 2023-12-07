import clsx from 'clsx'

export type ContentProps = React.ComponentPropsWithoutRef<'div'>

export const Content = ({ className = '', children, ...restProps }: ContentProps) => {
  const classes = clsx({
    'bg-white p-4 border': true,
    [className]: true,
  })

  return (
    <div {...restProps} className={classes}>
      {children}
    </div>
  )
}
