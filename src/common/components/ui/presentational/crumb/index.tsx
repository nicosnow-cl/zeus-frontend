import NextLink from 'next/link'

import { Crumb as TCrumb } from '@/common/types/misc/crumb.type'

export type CrumbProps = TCrumb & {
  isFirst?: boolean
}

export const Crumb = ({ href, label, icon, isFirst }: CrumbProps) => (
  <NextLink
    className={`inline-flex items-center gap-x-2 ${isFirst ? 'text-brand-600' : 'text-shade-950'}`}
    href={href}
  >
    {icon}
    {label}
  </NextLink>
)
