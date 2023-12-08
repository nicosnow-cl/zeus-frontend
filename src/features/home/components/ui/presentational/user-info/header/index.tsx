import { Badge } from '@radix-ui/themes'
import { Button } from '@/shadcn-components/ui/button'

import {
  Arrow90degRightIcon,
  PatchCheckFillIcon,
  ShareFillIcon,
  SuitHeartFillIcon,
} from '@/common/icons'
import clsx from 'clsx'

export type HeaderProps = {
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
}

export default function Header({ containerProps }: HeaderProps) {
  const { className, ...restContainerProps } = containerProps ?? {}

  const classes = clsx('flex flex-wrap justify-between gap-2', className)

  return (
    <div {...restContainerProps} className={classes}>
      <div className="flex items-center gap-1">
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

      <div className="flex items-center gap-1">
        <Button size="lg">
          Ver perfil
          <Arrow90degRightIcon className="ml-2" />
        </Button>

        <Button>
          <ShareFillIcon />
        </Button>
      </div>
    </div>
  )
}
