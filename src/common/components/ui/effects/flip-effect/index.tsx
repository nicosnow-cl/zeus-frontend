'use client'

import { a, useSpring } from '@react-spring/web'
import { useEffect, useState } from 'react'

export type FlipEffectProps = {
  frontChild: React.ReactNode
  backChild?: React.ReactNode
  delay?: number
}

export const FlipEffect = ({ frontChild, backChild, delay = 1000 }: FlipEffectProps) => {
  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  useEffect(() => {
    const timeoutId = setTimeout(() => setFlipped(true), delay)

    return () => clearTimeout(timeoutId)
  }, [delay])

  return (
    <div
      className="relative flex h-fit items-center justify-center"
      onClick={() => setFlipped((state) => !state)}
    >
      <a.div
        className="absolute h-fit w-full"
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      >
        {backChild}
      </a.div>

      <a.div
        className="h-fit w-full"
        style={{
          opacity,
          transform,
          rotateY: '180deg',
        }}
      >
        {frontChild}
      </a.div>
    </div>
  )
}
