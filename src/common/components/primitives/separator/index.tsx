import { twMerge } from 'tailwind-merge'
import * as RadixSeparator from '@radix-ui/react-separator'

export type SeparatorProps = React.ComponentProps<typeof RadixSeparator.Root>

export function Separator({ className, ...restProps }: SeparatorProps) {
  const classes = twMerge('separator', className)

  return <RadixSeparator.Root {...restProps} className={classes} />
}
