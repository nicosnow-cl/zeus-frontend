import { twMerge } from 'tailwind-merge'

export type RootProps = React.HTMLAttributes<HTMLDivElement>

export function Root(props: RootProps) {
  const { className, ...restProps } = props ?? {}
  const classes = twMerge('relative h-full overflow-hidden isolate', className)

  return <div {...restProps} className={classes} />
}
