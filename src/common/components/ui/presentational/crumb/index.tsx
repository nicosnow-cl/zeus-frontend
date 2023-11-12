import { Link } from '@radix-ui/themes'
import NextLink from 'next/link'

import { TCrumb } from '@/common/types/misc/crumb.type'

export type TCrumbProps = TCrumb & {
  isFirst?: boolean
}

export const Crumb = ({ href, label, icon, isFirst }: TCrumbProps) => (
  <Link
    asChild
    className={`inline-flex items-center gap-x-2 ${
      isFirst ? 'text-primary-600' : 'text-woodsmoke-950'
    }`}
    size="2"
  >
    <NextLink href={href}>
      {icon}
      {label}
    </NextLink>
  </Link>
)
