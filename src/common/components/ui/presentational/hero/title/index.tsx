export type TitleProps = React.ComponentPropsWithoutRef<'h1'>

export const Title = (props: TitleProps) => (
  <h1
    {...props}
    className={`absolute right-0 top-7  z-10 text-end text-7xl text-brand-700 ${
      props?.className ?? ''
    }`}
  />
)
