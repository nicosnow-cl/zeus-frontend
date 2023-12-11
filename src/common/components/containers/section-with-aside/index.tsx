'use client'

import { useScroll, motion, useTransform } from 'framer-motion'
import clsx from 'clsx'

export type SectionWithAsideContainerProps = {
  aside: React.ReactNode
  asideProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
  children: React.ReactNode
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
  hero?: React.ReactNode
  heroProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
}

export const SectionWithAsideContainer: React.FunctionComponent<SectionWithAsideContainerProps> = ({
  aside,
  asideProps,
  children,
  containerProps,
  hero,
  heroProps,
}: SectionWithAsideContainerProps) => {
  const { className: containerClassName, ...containerRestProps } = containerProps ?? {}
  const { className: asideClassName, ...asideRestProps } = asideProps ?? {}
  const { className: heroClassName, ...heroRestProps } = heroProps ?? {}

  return (
    <section className="grid-wrapper main-content relative">
      {hero && (
        <div {...heroRestProps} className={clsx('breakout mb-3', heroClassName)}>
          {hero}
        </div>
      )}

      <div
        {...containerRestProps}
        className={clsx(
          'relative flex flex-wrap justify-end gap-x-2 rounded-2xl bg-slate-200 p-2 dark:bg-shade-900/25',
          containerClassName
        )}
      >
        {children}

        <div
          {...asideRestProps}
          className={clsx(
            'order-2 w-1/5 min-w-[275px] rounded-2xl bg-slate-100/90 px-2 py-3 shadow-sm dark:bg-shade-950/30',
            asideClassName
          )}
        >
          {aside}
        </div>
      </div>
    </section>
  )
}
