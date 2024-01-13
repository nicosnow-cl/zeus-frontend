import clsx from 'clsx'

export type RootProps = React.HTMLAttributes<HTMLDivElement>

export default function Root(props: RootProps) {
  const { className, ...restProps } = props ?? {}
  const classes = clsx('relative h-full overflow-hidden isolate', className)

  return <div {...restProps} className={classes} />
}