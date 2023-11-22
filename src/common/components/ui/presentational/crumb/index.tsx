import { Link } from '@radix-ui/themes'
import NextLink from 'next/link'

import { Crumb as TCrumb } from '@/common/types/misc/crumb.type'

export type CrumbProps = TCrumb & {
  isFirst?: boolean
}

export const Crumb = ({ href, label, icon, isFirst }: CrumbProps) => (
  <Link
    asChild
    className={`inline-flex items-center gap-x-2 ${isFirst ? 'text-brand-600' : 'text-shade-950'}`}
    size="2"
  >
    <NextLink href={href}>
      {icon}
      {label}
    </NextLink>
  </Link>
)
