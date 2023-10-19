'use client'

import { Box, Switch } from '@radix-ui/themes'
import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'

import { MoonIcon } from '@/common/icons'

export const ColorModeSwitch = () => {
  const [checked, setChecked] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const defaultChecked = useMemo(() => systemTheme === 'dark', [systemTheme])

  const handleToggleTheme = () => (theme === 'dark' ? setTheme('light') : setTheme('dark'))

  useEffect(() => setChecked(theme === 'dark'), [theme])

  return (
    <Box className={`inline-flex items-center gap-x-2`}>
      <Switch
        checked={checked}
        defaultChecked={defaultChecked}
        onClick={handleToggleTheme}
        size="1"
      />
      <MoonIcon className={`text-4 text-indigo-9`} />
    </Box>
  )
}
