import clsx from 'clsx'

export type RootProps = React.HTMLAttributes<HTMLDivElement>

export function Root(props: RootProps) {
  const { className, ...restProps } = props ?? {}

  const classes = clsx('relative h-full overflow-hidden', className)

  return <div {...restProps} className={classes} />
}
