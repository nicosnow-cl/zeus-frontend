import { Avatar, Badge, Blockquote, Box, Flex, Heading, Text } from '@radix-ui/themes'
import clsx from 'clsx'

import { PatchCheckFillIcon, PersonCircleIcon, SuitHeartFillIcon } from '@/common/icons'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type ContractedProps = {
  age?: UserCardEntity['age']
  avatar: UserCardEntity['avatar']
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
  description: UserCardEntity['description']
  name: UserCardEntity['name']
  username?: UserCardEntity['username']
}

export default function Contracted({
  age,
  avatar,
  containerProps,
  description,
  name,
  username,
}: ContractedProps) {
  const { className, ...restContainerProps } = containerProps ?? {}

  const classes = clsx(
    'pt-2 px-2 relative h-full group-data-[expanded=true]:opacity-0 transition-opacity',
    className
  )

  return (
    <div {...restContainerProps} className={classes}>
      <div className="grid auto-cols-max grid-rows-1 place-content-end gap-2">
        <Badge className="px-2 py-1 text-3" radius="full" variant="surface" highContrast>
          <PatchCheckFillIcon /> VIP
        </Badge>

        <Badge
          className="px-2 py-1 text-2"
          color="tomato"
          radius="full"
          variant="surface"
          highContrast
        >
          <SuitHeartFillIcon /> 2.6k
        </Badge>
      </div>

      <div className="absolute bottom-0 left-0">
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
          className="max-h-0 border-t border-slate-100/20 bg-shade-900/20 p-2 opacity-0 backdrop-blur-sm transition-[opacity,max-height] duration-200 ease-in-out group-hover:max-h-96 group-hover:opacity-100"
          style={{
            textShadow: '2px 2px 3px rgba(0, 0, 0, 0.15)',
          }}
        >
          <Blockquote className="text-shade-50" color="crimson" size="2">
            {description}
          </Blockquote>
        </div>
      </div>
    </div>
  )
}
