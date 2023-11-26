export type RootProps = React.ComponentPropsWithoutRef<'div'>

export const Root = ({ className, ...restProps }: RootProps) => (
  <div
    {...restProps}
    className={`group relative cursor-pointer overflow-hidden rounded-3 transition-[transform] hover:z-20 hover:scale-[1.03] ${className}`}
  />
)
