'use client'

import { motion } from 'framer-motion'
import { Children, cloneElement, use, useEffect, useRef, useState } from 'react'

export type MasonryContainerProps = Omit<
  React.ComponentPropsWithoutRef<typeof motion.div>,
  'children'
> & {
  children: React.ReactNode
  masonryOptions: {
    columnNumber: number
    gap?: number
  }
}

export const MasonryContainer = ({ children, masonryOptions }: MasonryContainerProps) => {
  const { columnNumber = 1, gap = 8 } = masonryOptions

  const [containerWidth, setContainerWidth] = useState(0)
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  const [columnWidth, setColumnWidth] = useState(0)

  useEffect(() => {
    if (containerRef) {
      const currentContainerWidth = containerRef.getBoundingClientRect().width
      setContainerWidth(currentContainerWidth)
    }
  }, [containerRef])

  useEffect(() => {
    if (containerWidth) {
      const currentColumnWidth = Math.floor(
        (containerWidth - gap * (columnNumber - 1)) / columnNumber
      )
      setColumnWidth(currentColumnWidth)
    }
  }, [containerWidth, columnNumber, gap])

  const masonryState = {
    columns: columnNumber,
    currentRow: 0,
    currentRowSpace: containerWidth,
  }

  return (
    <motion.div ref={(el) => setContainerRef(el)} className="relative w-full">
      {Children.map(children, (child, idx) => {
        masonryState.currentRowSpace -= columnWidth + gap

        if (masonryState.currentRowSpace < 0) {
          masonryState.currentRowSpace = containerWidth
          masonryState.currentRow++
        }

        const position = {
          position: 'absolute',
          top: masonryState.currentRow * (columnWidth + gap),
          left: (idx % columnNumber) * (columnWidth + gap),
        }

        return cloneElement(child as any, {
          style: { ...position, width: columnWidth, height: 'auto' },
        })
      })}
    </motion.div>
  )
}
