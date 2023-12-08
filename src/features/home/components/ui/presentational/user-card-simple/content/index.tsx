import clsx from 'clsx'

export type ContentProps = React.HTMLAttributes<HTMLDivElement>

export function Content(props: ContentProps) {
  const { className, ...restProps } = props ?? {}

  const classes = clsx('pt-2 px-2 relative h-full overflow-hidden', className)

  return <div {...restProps} className={classes} />
}
