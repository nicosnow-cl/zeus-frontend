import { Heading } from '@radix-ui/themes'

export type HeroTitleProps = typeof Heading

const HeroTitle = ({
  children,
  className = '',
  ...restProps
}: React.ComponentPropsWithRef<HeroTitleProps>) => (
  <Heading size="9" className={`text-brand-600 ${className}`} {...restProps}>
    {children}
  </Heading>
)

export default HeroTitle
