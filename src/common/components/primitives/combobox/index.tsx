'use client'

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
import { CSS } from '@/common/utils/css-classes'
import { MenuSelectOption } from '@/common/types/misc/select-option'
import { twMerge } from 'tailwind-merge'
import { ValueBadge } from './value-badge'

const { Primitives, Utilities } = CSS

export type ComboboxProps = {
  btnClassName?: string
  btnProps?: React.ComponentPropsWithoutRef<typeof Button>
  emptyPlaceholder?: string
  glassmorphism?: boolean
  inputPlaceholder?: string
  onChange?: (value: string[]) => void
  options?: MenuSelectOption[]
  renderOption?: (option: MenuSelectOption) => React.ReactNode
  renderSelectedValue?: (value: string) => React.ReactNode
  triggerPlaceholder?: string
  value?: string[]
}

export function Combobox({
  btnProps,
  emptyPlaceholder,
  glassmorphism,
  inputPlaceholder,
  onChange,
  renderOption,
  renderSelectedValue,
  options = [],
  triggerPlaceholder,
  value: externalValue,
}: ComboboxProps) {
  const { className: btnClassName, ...restBtnProps } = btnProps ?? {}
  const btnClasses = twMerge(
    Primitives.Dropdowns.btnCombobox,
    glassmorphism && Utilities.glassmorphism,
    btnClassName
  )

  const isControlled = typeof externalValue != 'undefined'

  const [isOpen, setIsOpen] = useState(false)
  const [internalValue, setInternalValue] = useState<string[]>(isControlled ? externalValue : [])
  const [triggerAnchor, setTriggerAnchor] = useState<HTMLButtonElement | null>(null)
  const t = useTranslations('COMMON.primitives.multi-combobox')

  const value = isControlled ? externalValue : internalValue

  const handleSelectAll = () => {
    const allValues = options.map((option) => option.value?.toString().toLowerCase())

    onChange?.(allValues)
    if (!isControlled) setInternalValue(allValues)
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

  const isSelected = (item: string) => value.includes(item.toLowerCase())

  const renderSelectedValues = () => {
    const valueLength = value.length

    return (
      <>
        {value.slice(0, 5).map((option, idx) => {
          if (renderSelectedValue) {
            return renderSelectedValue(option)
          }

          return <ValueBadge key={idx} label={option} />
        })}

        {valueLength > 5 && <ValueBadge className="px-2 py-1" label={`+${valueLength - 5}`} />}
      </>
    )
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild onClick={(evt) => handleTriggerClick(evt)}>
        <Button
          {...restBtnProps}
          aria-expanded={isOpen}
          className={btnClasses}
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
        className={glassmorphism ? 'border-0 bg-transparent p-0' : 'p-0'}
        style={{
          minWidth: triggerAnchor?.offsetWidth || 'auto',
        }}
      >
        <Command className={glassmorphism ? Utilities.glassmorphism : ''}>
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
                  {renderOption ? renderOption(option) : option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
