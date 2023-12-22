import { twMerge } from 'tailwind-merge'

import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { PriceBadge } from '@/common/components/ui/presentational/price-badge'

export type BodyProps = {
  age?: UserCardEntity['age']
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
  description: UserCardEntity['description']
  hasPromo?: UserCardEntity['hasPromo']
  name: UserCardEntity['name']
  price: UserCardEntity['price']
}

export function Body({ age, containerProps, description, name }: BodyProps) {
  const { className, ...restContainerProps } = containerProps ?? {}

  const classes = twMerge('p-2 bg-gradient-to-t from-gray-950 text-gray-100', className)

  return (
    <div {...restContainerProps} className={classes}>
      <h4 className="heading-decorator mb-2 text-xl">
        {name}, {age}
      </h4>

      <p className="line-clamp-4 text-sm">{description}</p>
    </div>
  )
}
