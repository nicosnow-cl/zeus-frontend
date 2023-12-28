'use client'

import { Badge } from '@/shadcn-components/ui/badge'
import { Button } from '@/shadcn-components/ui/button'
import { cn } from '@/shadcn-lib/utils'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/shadcn-components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/shadcn-components/ui/popover'
import { ScrollArea } from '@/shadcn-components/ui/scroll-area'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

import { CheckIcon, CheckSquareIcon, ChevronDownIcon, SquareIcon } from '@/common/icons'
import { MenuSelectOption } from '@/common/types/misc/select-option'
import { ValueBadge } from './value-badge'

export type ComboboxProps = {
  btnClassName?: string
  emptyPlaceholder?: string
  inputPlaceholder?: string
  onChange?: (value: string[]) => void
  options?: MenuSelectOption[]
  triggerPlaceholder?: string
  value?: string[]
}

export function Combobox({
  emptyPlaceholder,
  inputPlaceholder,
  onChange,
  triggerPlaceholder,
  value: externalValue,
  btnClassName = '',
  options = [],
}: ComboboxProps) {
  const isControlled = typeof externalValue != 'undefined'

  const [isOpen, setIsOpen] = useState(false)
  const [internalValue, setInternalValue] = useState<string[]>(isControlled ? externalValue : [])
  const [triggerAnchor, setTriggerAnchor] = useState<HTMLButtonElement | null>(null)
  const t = useTranslations('COMMON.primitives.multi-combobox')

  const value = isControlled ? externalValue : internalValue

  const handleSelectAll = () => {
    onChange?.(options.map((option) => option.value?.toString()))
    if (!isControlled) setInternalValue(options.map((option) => option.value?.toString()))
  }

  const handleClear = () => {
    onChange?.([])
    if (!isControlled) setInternalValue([])
  }

  const handleTriggerClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setTriggerAnchor(evt.currentTarget)
  }

  const handleClickOption = (newItem: string) => {
    if (value.includes(newItem)) {
      onChange?.(value.filter((value) => value !== newItem))
      if (!isControlled) setInternalValue((prev) => prev.filter((item) => item !== newItem))

      return
    }

    onChange?.([...value, newItem])
    if (!isControlled) setInternalValue((prev) => [...prev, newItem])
  }

  const isSelected = (item: string) => value.includes(item)

  const renderSelectedValues = () => {
    const valueLength = value.length

    return (
      <>
        {value.slice(0, 5).map((option, idx) => (
          <ValueBadge key={idx} label={option} />
        ))}

        {valueLength > 5 && <ValueBadge label={`+${valueLength - 5}`} />}
      </>
    )
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild onClick={(evt) => handleTriggerClick(evt)}>
        <Button
          aria-expanded={isOpen}
          className={`h-auto max-h-[76px] min-h-[38px] justify-between rounded-full bg-shade-50/60 font-normal text-gray-950 dark:bg-shade-950/60 dark:text-gray-100 ${btnClassName}`}
          role="combobox"
          variant="outline"
        >
          {value.length > 0 ? (
            <div className="flex flex-wrap gap-2">{renderSelectedValues()}</div>
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

          <ScrollArea className="h-[360px]">
            <CommandEmpty>{emptyPlaceholder ?? t('no-results')}</CommandEmpty>

            <CommandGroup>
              {value.length === 0 && (
                <CommandItem onSelect={handleSelectAll} value="select-all">
                  <SquareIcon className="mr-2 h-4 w-4" />

                  {t('select-all')}
                </CommandItem>
              )}
              {value.length > 0 && (
                <CommandItem onSelect={handleClear} value="select-none">
                  <CheckSquareIcon className="mr-2 h-4 w-4" />
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
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
