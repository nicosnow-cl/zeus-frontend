export type RootProps = React.HTMLAttributes<HTMLDivElement>

export const Root = (props: RootProps) => (
  <section
    {...props}
    className={`grid-wrapper hero relative h-[550px] border-b-2 border-gray-200 shadow-xl  dark:border-gray-900 ${
      props?.className ?? ''
    }`}
  />
)
