import { Checkbox } from '@/shadcn-components/ui/checkbox'
import { Label } from '@radix-ui/react-label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shadcn-components/ui/select'
import { useCallback, useState } from 'react'
import * as Separator from '@radix-ui/react-separator'

import { Button } from '@/common/components/primitives/button'
import { Colors } from '@/common/types/misc/colors.type'
import { ComponentToRender } from '@/features/playground/types/misc/component-to-render.type'
import { renderButton } from '@/features/playground/strategies/render-component'

export type ComponentToRenderProps = {
  componentDef: ComponentToRender<React.FC>
}

export function ComponentToRender({ componentDef }: ComponentToRenderProps) {
  const { Component, props, otherProps } = componentDef

  const [componentState, setComponentState] = useState({})

  const renderCustomOptions = useCallback(() => {
    if (!props?.length) return null

    return props.map(({ key, type, values }, idx) => {
      switch (type) {
        case 'boolean':
          return (
            <div key={idx} className="items-top flex space-x-2">
              <Checkbox
                id={key}
                checked={componentState[key as keyof typeof componentState]}
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
                value={componentState[key as keyof typeof componentState]}
                onValueChange={(value) => handleComponentState(key, value)}
              >
                <SelectTrigger className="glassmorphism w-[180px]">
                  <SelectValue placeholder={key?.toUpperCase()} />
                </SelectTrigger>
                <SelectContent>
                  {values?.map((value, idx) => (
                    <SelectItem key={idx} value={value as string}>
                      {value as string}
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
  }, [props, componentState])

  const renderComponent = useCallback(() => {
    const componentName = Component.name

    switch (componentName) {
      case 'Button':
        const ButtonComponent = Component as typeof Button

        return renderButton({
          Component: ButtonComponent,
          props: { ...componentState, children: ButtonComponent.name },
          colors: otherProps?.colors as Colors[],
        })
      default:
        return null
    }
  }, [Component, componentState, otherProps])

  const handleComponentState = (key: string, value: any) => {
    setComponentState((prevState: any) => ({
      ...prevState,
      [key]: value,
    }))
  }

  return (
    <>
      {props?.length && (
        <>
          <div className="flex items-center gap-3">{renderCustomOptions()}</div>

          <Separator.Root className="separator-root" orientation="horizontal" decorative />
        </>
      )}

      <div className="flex flex-wrap gap-3">{renderComponent()}</div>
    </>
  )
}
