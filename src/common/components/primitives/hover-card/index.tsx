'use client'

import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import * as RadixHoverCard from '@radix-ui/react-hover-card'

const AnimatedContent = motion(RadixHoverCard.Content)

export type UserHoverCardProps = {
  children: React.ReactNode
  contentProps?: React.ComponentPropsWithoutRef<typeof AnimatedContent>
  portalProps?: React.ComponentPropsWithoutRef<typeof RadixHoverCard.Portal>
  rootProps?: React.ComponentPropsWithoutRef<typeof RadixHoverCard.Root>
  triggerProps?: React.ComponentPropsWithoutRef<typeof RadixHoverCard.Trigger>
}

export function HoverCard({
  children,
  contentProps,
  portalProps,
  rootProps,
  triggerProps,
}: Readonly<UserHoverCardProps>) {
  const { className: contentClassName, ...restContentProps } = contentProps ?? {}
  const contentClasses = twMerge('hover-card z-[51]', contentClassName)

  return (
    <RadixHoverCard.Root openDelay={400} closeDelay={100} {...rootProps}>
      <RadixHoverCard.Trigger asChild {...triggerProps} />

      <RadixHoverCard.Portal {...portalProps}>
        <AnimatedContent
          {...restContentProps}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={contentClasses}
        >
          {children}

          <RadixHoverCard.Arrow className="arrow" />
        </AnimatedContent>
      </RadixHoverCard.Portal>
    </RadixHoverCard.Root>
  )
}
