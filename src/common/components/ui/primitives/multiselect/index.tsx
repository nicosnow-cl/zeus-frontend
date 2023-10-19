'use client'

import { Badge, Box, Checkbox, DropdownMenu } from '@radix-ui/themes'
import { useState } from 'react'

import { ChevronDownIcon, XCircleFillIcon } from '@/common/icons'

const options = [
  {
    label: 'Ojos ámbar',
    value: 'option-1',
  },
  {
    label: 'Busto grande',
    value: 'option-2',
  },
  {
    label: 'Cabello castaño',
    value: 'option-3',
  },
  {
    label: 'Cabello rubio',
    value: 'option-4',
  },
  {
    label: 'Busto pequeño',
    value: 'option-5',
  },
  {
    label: 'Cola grande',
    value: 'option-6',
  },
]

export type MultiselectProps = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  onItemClick?: (evt: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => void
}

export const Multiselect = () => {
  const [open, setOpen] = useState(false)
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  const [rootElem, setRootElem] = useState<HTMLDivElement | null>(null)

  const placeholder = 'Seleccione una opción'

  const handleItemClick = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => {
    evt.preventDefault()
    evt.stopPropagation()

    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((value) => value !== value))
      return
    }

    setSelectedValues([...selectedValues, value])
  }

  const handleRemoveValue = (evt: React.MouseEvent<SVGElement, MouseEvent>, value: string) => {
    evt.preventDefault()
    evt.stopPropagation()

    setSelectedValues(selectedValues.filter((val) => val !== value))
  }

  const handleOpen = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.preventDefault()
    evt.stopPropagation()

    setOpen(true)
    setRootElem(evt.currentTarget)
  }

  return (
    <DropdownMenu.Root open={open} onOpenChange={(open) => !open && setOpen(open)}>
      <DropdownMenu.Trigger>
        <Box
          className="flex min-h-[36px] w-full cursor-pointer items-center justify-between gap-2 rounded-6 border border-gray-7 bg-surface pl-3 pr-3 hover:border-gray-8"
          onClick={handleOpen}
        >
          {selectedValues.length < 1 && placeholder}
          {selectedValues.length > 0 && (
            <span className="flex flex-wrap gap-1 gap-x-2 py-1">
              {selectedValues.map((value, idx) => (
                <Badge key={idx} color="blue">
                  {value}

                  <XCircleFillIcon
                    className="block cursor-pointer hover:scale-105"
                    onClick={(evt) => handleRemoveValue(evt, value)}
                  />
                </Badge>
              ))}
            </span>
          )}

          <ChevronDownIcon />
        </Box>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        style={{
          width: rootElem?.clientWidth,
        }}
      >
        {options.map((option, idx) => (
          <DropdownMenu.Item
            key={idx}
            className="flex justify-start gap-x-3"
            onClick={(evt) => handleItemClick(evt, option.value)}
          >
            <Checkbox checked={selectedValues.includes(option.value)} color="blue" size="3" />
            {option.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
