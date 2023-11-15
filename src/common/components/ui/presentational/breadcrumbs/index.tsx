import { Text } from '@radix-ui/themes'

import { ChevronRightIcon } from '@/common/icons'
import { Crumb } from '../crumb'
import { Crumb as TCrumb } from '@/common/types/misc/crumb.type'

export type BreadcrumbsProps = {
  crumbs: TCrumb[]
  className?: string
}

export const Breadcrumbs = ({ crumbs, className = '' }: BreadcrumbsProps) => {
  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2">
        {crumbs.map((crumb, idx) => (
          <li key={idx} className={`inline-flex items-center space-x-2`}>
            {idx < crumbs.length - 1 ? (
              <>
                <Crumb {...crumb} isFirst={idx === 0} />
                <ChevronRightIcon size="12" />
              </>
            ) : (
              <Text size="2">{crumb.label}</Text>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
