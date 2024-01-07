import { Slider } from '@/shadcn-components/ui/slider'
import { SliderProps } from '@radix-ui/react-slider'
import { useMemo, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export type LabeledSliderProps = Omit<SliderProps, 'children' | 'max'> & {
  containerProps?: Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>
  defaultValue?: [number, number]
  glassmorphism?: boolean
  max: number
  value?: [number, number]
}

export const LabeledSlider = ({
  containerProps,
  defaultValue,
  onValueChange,
  onValueCommit,
  max,
  value: externalValue,
  min = 0,
  glassmorphism,
  ...restProps
}: LabeledSliderProps) => {
  const { className, ...restContainerProps } = containerProps ?? {}

  const containerClasses = twMerge(
    'rounded-md bg-gradient-to-l from-brand-400/10 dark:from-brand-950/30',
    glassmorphism && 'glassmorphism',
    className
  )

  const isControlled = typeof externalValue !== 'undefined'

  const [internalValue, setInternalValue] = useState<number[]>(defaultValue ?? [0, 100])

  const value = isControlled ? externalValue : internalValue

  const handleValueChange = (value: number[]) => {
    if (value[0] >= value[1]) return

    if (!isControlled) setInternalValue(value)

    onValueChange?.(value)
  }

  const handleValueCommit = (value: number[]) => {
    if (!isControlled) setInternalValue(value)

    onValueCommit?.(value)
  }

  return (
    <div {...restContainerProps} className={containerClasses}>
      <div className="flex justify-between px-2 py-1">
        <span>${value[0]}</span>

        <span>${value[1]}</span>
      </div>

      <Slider
        {...restProps}
        value={value}
        onValueChange={handleValueChange}
        onValueCommit={handleValueCommit}
        max={max}
        min={min}
      />
    </div>
  )
}