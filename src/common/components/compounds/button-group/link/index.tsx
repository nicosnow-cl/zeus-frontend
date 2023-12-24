import { Link as NextLink } from '@intl/navigation'
import { twMerge } from 'tailwind-merge'
import { UrlObject } from 'url'

export type LinkProps = Omit<
  React.ComponentPropsWithoutRef<typeof NextLink>,
  'ref' | 'children' | 'href'
> & {
  href: string | UrlObject
  icon?: React.ReactNode
  label: string
}

export function Link({ className, href, icon, label, ...restProps }: LinkProps) {
  const classes = twMerge('btn-link', className)

  return (
    <NextLink {...restProps} className={classes} href={href}>
      {label}
      {icon}
    </NextLink>
  )
}
