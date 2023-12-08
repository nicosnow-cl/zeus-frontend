import { Badge } from '@radix-ui/themes'
import clsx from 'clsx'

import { PatchCheckFillIcon, SuitHeartFillIcon } from '@/common/icons'

export type HeaderProps = {
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
}

export function Header({ containerProps }: HeaderProps) {
  const { className, ...restContainerProps } = containerProps ?? {}

  const classes = clsx('grid auto-cols-max grid-rows-1 place-content-end gap-2', className)

  return (
    <div {...restContainerProps} className={classes}>
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
  )
}
