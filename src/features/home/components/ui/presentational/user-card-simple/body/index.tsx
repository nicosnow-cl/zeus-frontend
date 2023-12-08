import { Blockquote, Heading } from '@radix-ui/themes'

import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import clsx from 'clsx'

export type BodyProps = {
  age?: UserCardEntity['age']
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
  description: UserCardEntity['description']
  name: UserCardEntity['name']
}

export function Body({ age, containerProps, description, name }: BodyProps) {
  const { className, ...restContainerProps } = containerProps ?? {}

  const classes = clsx('absolute bottom-0 left-0', className)

  return (
    <div {...restContainerProps} className={classes}>
      <Heading
        as="h4"
        size="6"
        className="px-2 text-shade-50"
        style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}
        highContrast
      >
        {name}, {age}
      </Heading>

      <div
        className="border-t border-slate-100/20 bg-shade-900/20 px-2 py-3 backdrop-blur-sm"
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
