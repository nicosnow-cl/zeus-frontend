import { Badge } from '@/shadcn-components/ui/badge'
import clsx from 'clsx'

export type ServicesGroupProps = {
  services: string[]
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
}

export const ServicesGroup = ({ services, containerProps }: ServicesGroupProps) => {
  const { className, ...restContainerProps } = containerProps ?? {}

  const classes = clsx('grid grid-cols-2 gap-1 md:grid-cols-4', className)

  return (
    <div {...restContainerProps} className={classes}>
      {services.map((service, idx) => (
        <Badge key={idx} variant="secondary">
          {service}
        </Badge>
      ))}
    </div>
  )
}
