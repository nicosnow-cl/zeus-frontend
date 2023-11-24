export type RootProps = React.HTMLAttributes<HTMLDivElement>

export const Root = (props: RootProps) => (
  <section
    {...props}
    className={`grid-wrapper hero relative h-[550px] overflow-hidden ${props?.className ?? ''}`}
  />
)
