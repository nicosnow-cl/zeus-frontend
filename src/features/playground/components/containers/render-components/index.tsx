'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shadcn-components/ui/select'
import { useCallback, useState } from 'react'
import { Checkbox } from '@/shadcn-components/ui/checkbox'

import { Button } from '@/common/components/primitives/button'
import { Colors } from '@/common/types/misc/colors.type'
import { Label } from '@radix-ui/react-label'
import * as Separator from '@radix-ui/react-separator'

export const COLORS = [
  'brand',
  'accent',
  'shade',
  'elite',
  'pro',
  'prime',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
]

export const COMPONENTS = [
  {
    Component: Button,
    props: {
      label: 'Button',
      colors: COLORS,
      options: [
        { key: 'variant', type: 'string', values: ['base', 'primary', 'secondary'] },
        { key: 'glow', type: 'boolean' },
        { key: 'glassmorphism', type: 'boolean' },
        { key: 'icon', type: 'boolean' },
        { key: 'disabled', type: 'boolean' },
      ],
    },
  },
]

export function RenderComponentsContainer() {
  const [selectedComponent, setSelectedComponent] = useState<string>('')
  const [customOptions, setCustomOptions] = useState<
    {
      key: string
      type: string
      values?: string[]
    }[]
  >([])
  const [componentState, setComponentState] = useState<any>({})

  const handleSelectComponent = (value: string) => {
    const parsedValue = parseInt(value)

    const component = COMPONENTS[parsedValue]

    setSelectedComponent(value)
    if (component.props.options) setCustomOptions(component.props.options)
  }

  const handleComponentState = (key: string, value: any) => {
    setComponentState((prevState: any) => ({
      ...prevState,
      [key]: value,
    }))
  }

  const renderCustomOptions = useCallback(() => {
    if (!customOptions.length) return null

    return customOptions.map(({ key, type, values }, idx) => {
      switch (type) {
        case 'boolean':
          return (
            <div key={idx} className="items-top flex space-x-2">
              <Checkbox
                id={key}
                checked={componentState[key]}
                onCheckedChange={(value) => handleComponentState(key, value)}
              />
              <Label htmlFor={key} className="text-sm uppercase">
                {key}
              </Label>
            </div>
          )
        case 'string':
          return (
            <div key={key} className="flex gap-2">
              <Select
                value={componentState[key]}
                onValueChange={(value) => handleComponentState(key, value)}
              >
                <SelectTrigger className="glassmorphism w-[180px]">
                  <SelectValue placeholder={key?.toUpperCase()} />
                </SelectTrigger>
                <SelectContent>
                  {values?.map((value, idx) => (
                    <SelectItem key={idx} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )
        default:
          return null
      }
    })
  }, [customOptions, componentState])

  const renderComponent = useCallback(() => {
    if (!selectedComponent) return null

    const parsedValue = parseInt(selectedComponent)
    const { Component, props } = COMPONENTS[parsedValue]
    const componentName = Component.name

    switch (componentName) {
      case 'Button':
        return props.colors.map((color, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-1 rounded-2xl bg-shade-200 p-2 dark:bg-shade-800"
          >
            <Label className="text-sm font-semibold uppercase">{color}</Label>

            <Component {...componentState} color={color as Colors} type="submit">
              {props.label}
            </Component>
          </div>
        ))
      default:
        return null
    }
  }, [selectedComponent, componentState])

  console.log({ componentState })

  return (
    <div className="z-0 mt-5 flex flex-col gap-2 rounded-2xl bg-shade-100 p-2 shadow dark:bg-shade-900">
      <div className="flex items-center gap-2">
        <Select value={selectedComponent} onValueChange={handleSelectComponent}>
          <SelectTrigger className="glassmorphism w-[180px]">
            <SelectValue placeholder="Custom Component" />
          </SelectTrigger>
          <SelectContent>
            {COMPONENTS.map(({ Component }, idx) => (
              <SelectItem key={idx} value={`${idx}`}>
                {Component.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {renderCustomOptions()}
      </div>

      <Separator.Root className="separator-root" orientation="horizontal" decorative />

      <div className="flex flex-wrap gap-3">{renderComponent()}</div>
    </div>
  )
}
