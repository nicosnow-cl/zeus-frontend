export type RootProps = React.ComponentPropsWithoutRef<'div'>

export const Root = ({ className, ...restProps }: RootProps) => (
  <div
    {...restProps}
    className={`group relative cursor-pointer overflow-hidden rounded-3 transition-[transform] ${className}`}
  />
)
