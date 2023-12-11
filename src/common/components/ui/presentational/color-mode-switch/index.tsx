'use client'

import { Flex, Switch } from '@radix-ui/themes'
import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'

import { MoonIcon, SunIcon } from '@/common/icons'

export const ColorModeSwitch = () => {
  const [checked, setChecked] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const defaultChecked = useMemo(() => systemTheme === 'dark', [systemTheme])

  const handleToggleTheme = () => (theme === 'dark' ? setTheme('light') : setTheme('dark'))

  useEffect(() => setChecked(theme === 'dark'), [theme])

  return (
    <Flex align="center" gap="2">
      <Switch
        checked={checked}
        defaultChecked={defaultChecked}
        onClick={handleToggleTheme}
        size="1"
      />

      {checked ? (
        <MoonIcon className={`text-4 text-indigo-9`} />
      ) : (
        <SunIcon className={`text-4 text-amber-11`} />
      )}
    </Flex>
  )
}
