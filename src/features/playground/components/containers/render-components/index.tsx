'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shadcn-components/ui/tabs'
import { useState } from 'react'

import { Button } from '@/common/components/primitives/button'
import { ComponentToRender } from '../../presentational/component-to-render'
import { ComponentToRender as TComponentToRender } from '../../../types/misc/component-to-render.type'
import { COLORS } from '@config/constants'

export const COMPONENTS = [
  {
    Component: Button,
    props: [
      { key: 'variant', type: 'string', values: ['base', 'primary', 'secondary'] },
      { key: 'icon', type: 'boolean' },
      { key: 'glassmorphism', type: 'boolean' },
      { key: 'glow', type: 'boolean' },
      { key: 'disabled', type: 'boolean' },
    ],
    otherProps: {
      colors: COLORS,
    },
  },
] as TComponentToRender<React.FC>[]

export function RenderComponentsContainer() {
  const [selectedComponent, setSelectedComponent] = useState<string>('0')

  const handleSelectComponent = (value: string) => {
    setSelectedComponent(value)
  }

  return (
    <Tabs
      className="mt-5 flex flex-col gap-2"
      value={selectedComponent}
      onValueChange={handleSelectComponent}
    >
      <TabsList className="w-fit">
        {COMPONENTS.map(({ Component }, idx) => (
          <TabsTrigger key={idx} value={`${idx}`}>
            {Component.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {COMPONENTS.map((componentDef, idx) => (
        <TabsContent key={idx} className="mt-2" value={`${idx}`}>
          <div className="svg-background-3 flex flex-col gap-4 rounded-2xl bg-shade-100/30 p-2 shadow dark:bg-shade-900/30">
            <ComponentToRender componentDef={componentDef} />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
