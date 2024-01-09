import clsx from 'clsx'
import NextLink from 'next/link'

import { Crumb as TCrumb } from '@/common/types/misc/crumb.type'

export type CrumbProps = TCrumb & {
  isFirst?: boolean
  containerProps?: Omit<React.ComponentProps<typeof NextLink>, 'href' | 'children'>
}

export const Crumb = ({ href, label, icon, isFirst, containerProps }: CrumbProps) => {
  const { className = '', ...restContainerProps } = containerProps ?? {}
  const classes = clsx(
    'inline-flex items-center gap-x-1',
    className,
    isFirst ? 'text-brand-600' : 'text-shade-950'
  )

  return (
    <NextLink className={classes} href={href} {...restContainerProps}>
      {icon}
      {label}
    </NextLink>
  )
}
