import { Heading } from '@radix-ui/themes'

export type TitleProps = typeof Heading

export const Title = (props: React.ComponentPropsWithRef<TitleProps>) => (
  <Heading
    size="9"
    {...props}
    className={`absolute right-0 top-7  z-10 text-end text-7xl text-brand-700 ${
      props?.className ?? ''
    }`}
  />
)
