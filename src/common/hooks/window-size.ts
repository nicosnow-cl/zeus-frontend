'use client'

import { useEffect, useState } from 'react'
import debounce from 'lodash/debounce'

export const useWindowSize = () => {
  const isSSR = typeof window !== 'undefined'

  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  })

  const changeWindowSize = debounce(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }, 100)

  useEffect(() => {
    window.addEventListener('resize', changeWindowSize)

    return () => {
      window.removeEventListener('resize', changeWindowSize)
    }
  }, [changeWindowSize])

  return windowSize
}
