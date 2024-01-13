'use client'

import { Switch } from '@/shadcn-components/ui/switch'
import { throttle } from 'lodash'
import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'

import { MoonIcon, SunIcon } from '@/common/icons'
import { uiActions } from '@/common/store/ui'

export const ColorModeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme } = useTheme()
  const [checked, setChecked] = useState(false)

  const defaultChecked = useMemo(() => systemTheme === 'dark', [systemTheme])

  const handleToggleTheme = throttle(() => uiActions.toggleTheme(true), 0.4)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => setChecked(theme === 'dark'), [theme])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2">
      <Switch checked={checked} defaultChecked={defaultChecked} onClick={handleToggleTheme} />

      {checked ? <MoonIcon /> : <SunIcon />}
    </div>
  )
}
