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
  const classes = twMerge(
    'flex items-center gap-x-2 text-shade-100 hover:bg-gray-950/20 p-2 transition-[background]',
    className
  )

  return (
    <NextLink {...restProps} className={classes} href={href}>
      {label}
      {icon}
    </NextLink>
  )
}
