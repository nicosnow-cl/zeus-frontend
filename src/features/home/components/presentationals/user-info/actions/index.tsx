import { Arrow90degRightIcon, ShareFillIcon } from '@/common/icons'
import { Button } from '@/shadcn-components/ui/button'
import { twMerge } from 'tailwind-merge'

export type ActionsProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>

export function Actions({ className, ...restProps }: ActionsProps) {
  const classes = twMerge('flex items-center justify-end gap-2', className)

  return (
    <div {...restProps} className={classes}>
      <Button size="lg" onFocus={(evt) => evt.stopPropagation()}>
        Ver perfil
        <Arrow90degRightIcon className="ml-2" />
      </Button>

      <Button onFocus={(evt) => evt.stopPropagation()}>
        <ShareFillIcon />
      </Button>
    </div>
  )
}
