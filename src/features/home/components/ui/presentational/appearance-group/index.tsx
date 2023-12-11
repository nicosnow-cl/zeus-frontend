import { Text } from '@radix-ui/themes'
import clsx from 'clsx'

export type AppearanceGroupProps = {
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
  textProps?: Omit<React.ComponentProps<typeof Text>, 'children' | 'as'>
}

export function AppearanceGroup({ containerProps, textProps }: AppearanceGroupProps) {
  const { className, ...restContainerProps } = containerProps ?? {}

  const classes = clsx('flex flex-wrap gap-1 justify-between', className)

  return (
    <div {...restContainerProps} className={classes}>
      <Text className="text-crimson-9" size="2" weight="bold" {...textProps}>
        Mulata
      </Text>
      <Text className="text-crimson-9" size="2" weight="bold" {...textProps}>
        162 CM
      </Text>
      <Text className="text-crimson-9" size="2" weight="bold" {...textProps}>
        57 KG
      </Text>
      <Text className="text-crimson-9" size="2" weight="bold" {...textProps}>
        101 - 84 - 100 CM
      </Text>
    </div>
  )
}
