import { twMerge } from 'tailwind-merge'

export type ContentProps = React.HTMLAttributes<HTMLDivElement>

export function Content(props: ContentProps) {
  const { className, ...restProps } = props ?? {}
  const classes = twMerge('relative h-full flex flex-col justify-between', className)

  return <div {...restProps} className={classes} />
}
