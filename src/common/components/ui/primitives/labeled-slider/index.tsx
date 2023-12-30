import { Slider } from '@/shadcn-components/ui/slider'
import { SliderProps } from '@radix-ui/react-slider'
import { useMemo, useState } from 'react'

export type LabeledSliderProps = Omit<SliderProps, 'children' | 'max'> & {
  defaultValue?: [number, number]
  max: number
  value?: [number, number]
}

export const LabeledSlider = ({
  defaultValue,
  onValueChange,
  onValueCommit,
  max,
  value: externalValue,
  min = 0,
  ...restProps
}: LabeledSliderProps) => {
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
    <div className="glassmorphism rounded-md bg-gradient-to-r from-green-500/5 to-red-500/5 dark:from-green-600/20 dark:to-red-600/20">
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
