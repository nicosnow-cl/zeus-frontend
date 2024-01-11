import { twMerge } from 'tailwind-merge'
import { Badge } from '../../badge'

export type ValueBadgeProps = Omit<React.ComponentProps<typeof Badge>, 'children'> & {
  label: string
}

export const ValueBadge = ({ className, label, ...restProps }: ValueBadgeProps) => {
  const classes = twMerge('cursor-pointer bg-gray-950 p-1', className)

  const needSplitLabel = label.length > 13

  return (
    <Badge
      {...restProps}
      className={classes}
      style={{
        fontSize: '9px',
        lineHeight: '12px',
      }}
      color="gray"
      small
    >
      {!needSplitLabel ? label : `${label.slice(0, 13)}...`}
    </Badge>
  )
}
