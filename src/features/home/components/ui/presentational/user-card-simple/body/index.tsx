import { Blockquote, Heading } from '@radix-ui/themes'
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

  const classes = clsx('absolute bottom-0 left-0', className)

  return (
    <div {...restContainerProps} className={classes}>
      <div className="mb-2 flex items-center justify-between px-2">
        <Heading
          as="h4"
          className="text-shade-50 drop-shadow-sm"
          size="6"
          style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
        >
          {name}, {age}
        </Heading>

        <PriceBadge hasPromo={hasPromo} price={price} />
      </div>

      <div
        className="border-t border-shade-100/50 bg-gradient-to-t from-shade-950/50 px-2 py-3 backdrop-blur-sm dark:from-shade-950/80"
        style={{
          textShadow: '2px 2px 3px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Blockquote className="text-shade-50" color="crimson" size="2">
          {description}
        </Blockquote>
      </div>
    </div>
  )
}
