import clsx from 'clsx'

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

export function Body({ age, containerProps, description, hasPromo, name, price }: BodyProps) {
  const { className, ...restContainerProps } = containerProps ?? {}

  const classes = clsx('p-2 bg-gradient-to-t from-gray-950 text-gray-100', className)

  return (
    <div {...restContainerProps} className={classes}>
      <div className="mb-2 flex items-end justify-between">
        <h4
          className="heading-decorator text-xl"
          style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
        >
          {name}, {age}
        </h4>

        <PriceBadge hasPromo={hasPromo} price={price} />
      </div>

      <div
        className="line-clamp-4 text-sm"
        style={{
          textShadow: '2px 2px 3px rgba(0, 0, 0, 0.15)',
        }}
      >
        {description}
      </div>
    </div>
  )
}
