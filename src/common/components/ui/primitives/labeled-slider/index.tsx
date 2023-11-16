import { Slider } from '@/shadcn-components/ui/slider'
import { SliderProps } from '@radix-ui/react-slider'
import { Badge, Flex } from '@radix-ui/themes'
import { useState } from 'react'

export type LabeledSliderProps = SliderProps & {}

export const LabeledSlider = ({
  value: externalValue,
  defaultValue,
  onValueChange,
  onValueCommit,
  ...restProps
}: LabeledSliderProps) => {
  const isControlled = typeof externalValue !== 'undefined'

  const [internalValue, setInternalValue] = useState<number[]>(defaultValue ?? [0])

  const value = isControlled ? externalValue : internalValue

  const handleValueChange = (value: number[]) => {
    if (!isControlled) setInternalValue(value)

    onValueChange?.(value)
  }

  const handleValueCommit = (value: number[]) => {
    if (!isControlled) setInternalValue(value)

    onValueCommit?.(value)
  }

  console.log({ value })

  return (
    <div>
      <Flex className="mb-2 rounded-full bg-gray-100 dark:bg-gray-900" justify="between">
        {value.length > 1 && (
          <Badge variant="solid" color="gray" size="2">
            ${value[0]}
          </Badge>
        )}

        <Badge variant="solid" color="yellow" size="2">
          ${value.length > 1 ? value[1] : value[0]}
        </Badge>
      </Flex>

      <Slider
        {...restProps}
        value={value}
        onValueChange={handleValueChange}
        onValueCommit={handleValueCommit}
        step={10000}
        max={500000}
      />
    </div>
  )
}
