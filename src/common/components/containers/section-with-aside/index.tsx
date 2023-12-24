import { twMerge } from 'tailwind-merge'

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
        <div {...heroRestProps} className={twMerge('breakout mb-6', heroClassName)}>
          {hero}
        </div>
      )}

      <div
        {...containerRestProps}
        className={twMerge('main-with-aside gap-2 rounded-2xl', containerClassName)}
      >
        {children}

        <div
          {...asideRestProps}
          className={twMerge('glassmorphism rounded-2xl px-2 py-3 shadow-md', asideClassName)}
        >
          {aside}
        </div>
      </div>
    </section>
  )
}
