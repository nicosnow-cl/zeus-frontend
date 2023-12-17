import clsx from 'clsx'

export type ContentProps = React.HTMLAttributes<HTMLDivElement>

export function Content(props: ContentProps) {
  const { className, ...restProps } = props ?? {}
  const classes = clsx('relative h-full flex flex-col justify-between', className)

  return <div {...restProps} className={classes} />
}
