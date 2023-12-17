import clsx from 'clsx'

export type AppearanceGroupProps = {
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
  textProps?: Omit<React.ComponentProps<'p'>, 'children' | 'as'>
}

export function AppearanceGroup({ containerProps, textProps }: AppearanceGroupProps) {
  const { className, ...restContainerProps } = containerProps ?? {}

  const classes = clsx('flex flex-wrap gap-1 justify-between', className)

  return (
    <div {...restContainerProps} className={classes}>
      <p className="text-brand-600" {...textProps}>
        Mulata
      </p>
      <p className="text-brand-600" {...textProps}>
        162 CM
      </p>
      <p className="text-brand-600" {...textProps}>
        57 KG
      </p>
      <p className="text-brand-600" {...textProps}>
        101 - 84 - 100 CM
      </p>
    </div>
  )
}
