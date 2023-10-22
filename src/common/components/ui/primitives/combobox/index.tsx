'use client'

import { Badge, Flex } from '@radix-ui/themes'
import { Button } from '@/shadcn-components/ui/button'
import { cn } from '@/shadcn-lib'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/shadcn-components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/shadcn-components/ui/popover'
import { useState } from 'react'

import { CheckIcon, CheckSquareIcon, ChevronDownIcon, SquareIcon } from '@/common/icons'
import { TMenuSelectOption } from '@/common/types/misc/select-option'
import { useTranslations } from 'next-intl'

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'blitz',
    label: 'Blitz',
  },
  {
    value: 'redwood',
    label: 'Redwood',
  },
]

export type TComboboxProps = {
  emptyPlaceholder?: string
  inputPlaceholder?: string
  triggerPlaceholder?: string
  options?: TMenuSelectOption[]
}

export function Combobox({
  emptyPlaceholder,
  inputPlaceholder,
  triggerPlaceholder,
  options = [...frameworks],
}: TComboboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  const [triggerAnchor, setTriggerAnchor] = useState<HTMLButtonElement | null>(null)

  const t = useTranslations('primitives.multi-combobox')

  const handleTriggerClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setTriggerAnchor(evt.currentTarget)
  }

  const handleClickOption = (currentValue: string) => {
    if (selectedValues.includes(currentValue)) {
      setSelectedValues((prev) => prev.filter((value) => value !== currentValue))
      return
    }

    setSelectedValues((prev) => [...prev, currentValue])
  }

  const isSelected = (value: string) => selectedValues.includes(value)

  const renderSelectedValues = () =>
    selectedValues.map((option, idx) => (
      <Badge key={idx} color="crimson" className="cursor-pointer" highContrast>
        {option}
      </Badge>
    ))

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild onClick={(evt) => handleTriggerClick(evt)}>
        <Button
          aria-expanded={isOpen}
          className="h-auto min-h-[38px] justify-between rounded-full text-gray-500 dark:text-gray-400"
          role="combobox"
          variant="outline"
        >
          {selectedValues.length > 0 ? (
            <Flex className="max-w-full" gap="2" wrap="wrap">
              {renderSelectedValues()}
            </Flex>
          ) : (
            triggerPlaceholder ?? t('placeholder')
          )}
          <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="p-0"
        style={{
          minWidth: triggerAnchor?.offsetWidth || 'auto',
        }}
      >
        <Command>
          <CommandInput placeholder={inputPlaceholder ?? t('input-placeholder')} />
          <CommandEmpty>{emptyPlaceholder ?? t('no-results')}</CommandEmpty>
          <CommandGroup>
            {selectedValues.length === 0 && (
              <CommandItem
                onSelect={() =>
                  setSelectedValues([...options.map((option) => option.value?.toString())])
                }
                value="unclear"
              >
                <CheckSquareIcon className="mr-2 h-4 w-4" />
                {t('select-all')}
              </CommandItem>
            )}
            {selectedValues.length > 0 && (
              <CommandItem onSelect={() => setSelectedValues([])} value="clear">
                <SquareIcon className="mr-2 h-4 w-4" />
                {t('select-none')}
              </CommandItem>
            )}

            {options.map((option, idx) => (
              <CommandItem key={idx} value={option.value.toString()} onSelect={handleClickOption}>
                <CheckIcon
                  className={cn(
                    'mr-2 h-4 w-4',
                    isSelected(option.value.toString()) ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
