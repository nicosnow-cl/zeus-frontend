'use client'

import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@/shadcn-components/ui/switch'

import { MoonIcon, SunIcon } from '@/common/icons'

export const ColorModeSwitch = () => {
  const [checked, setChecked] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const defaultChecked = useMemo(() => systemTheme === 'dark', [systemTheme])

  const handleToggleTheme = () => (theme === 'dark' ? setTheme('light') : setTheme('dark'))

  useEffect(() => setChecked(theme === 'dark'), [theme])

  return (
    <div className="flex items-center gap-2">
      <Switch checked={checked} defaultChecked={defaultChecked} onClick={handleToggleTheme} />

      {checked ? (
        <MoonIcon className={`text-4 text-indigo-9`} />
      ) : (
        <SunIcon className={`text-4 text-amber-11`} />
      )}
    </div>
  )
}
