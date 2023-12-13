import { Badge } from '@/shadcn-components/ui/badge'
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

  const [minPercent, maxPercent] = useMemo(
    () => [((value[0] - min) / max) * 100, (value[1] / max) * 100],
    [max, min, value]
  )

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
    <div
      className="rounded-md [--bg-from:theme(colors.mint.2)] [--bg-to:theme(colors.bronze.2)] dark:[--bg-from:theme(colors.mint.1)] dark:[--bg-to:theme(colors.bronze.1)]"
      style={{
        background: `linear-gradient(90deg, var(--bg-from) ${minPercent}%, var(--bg-to) ${maxPercent}%)`,
      }}
    >
      <div className="justify-between">
        <Badge className="bg-transparent">${value[0]}</Badge>

        <Badge className="bg-transparent">${value[1]}</Badge>
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
