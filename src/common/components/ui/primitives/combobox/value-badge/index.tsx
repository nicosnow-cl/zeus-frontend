import { Badge } from '../../Badge'

export type ValueBadgeProps = {
  badgeProps?: Omit<React.ComponentProps<typeof Badge>, 'children'>
  label: string
}

export const ValueBadge = ({ badgeProps, label }: ValueBadgeProps) => {
  const needSplitLabel = label.length > 13

  return (
    <Badge
      {...badgeProps}
      className="cursor-pointer bg-gray-950 p-1"
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
