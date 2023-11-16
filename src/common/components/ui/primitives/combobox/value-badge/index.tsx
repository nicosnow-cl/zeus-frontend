import { Badge } from '@radix-ui/themes'

export type ValueBadgeProps = {
  badgeProps?: Omit<React.ComponentProps<typeof Badge>, 'children'>
  label: string
}

export const ValueBadge = ({ badgeProps, label }: ValueBadgeProps) => {
  const needSplitLabel = label.length > 13

  return (
    <Badge
      {...badgeProps}
      highContrast
      className="cursor-pointer"
      style={{
        fontSize: '10px',
      }}
    >
      {!needSplitLabel ? label : `${label.slice(0, 13)}...`}
    </Badge>
  )
}
