import { Label } from '@radix-ui/react-label'

import { Button, ButtonProps } from '@/common/components/primitives/button'
import { Colors } from '@/common/types/misc/colors.type'
import { LogoIcon } from '@/common/icons'

export const renderButton = ({
  Component,
  colors,
  props,
}: {
  Component: typeof Button
  props: ButtonProps
  colors?: Colors[]
}) => {
  return colors?.map((color, idx) => (
    <div
      key={idx}
      className="z-0 flex flex-col items-center gap-1 rounded-2xl bg-shade-200/30 p-2 dark:bg-shade-800/30"
    >
      <Label className="text-sm font-semibold uppercase">{color}</Label>

      <Component {...props} color={color as Colors} type="submit">
        {props?.['icon'] ? <LogoIcon /> : props.children}
      </Component>
    </div>
  ))
}
