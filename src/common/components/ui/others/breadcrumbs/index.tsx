import { ChevronRightIcon } from '@/common/icons'
import { Crumb } from '../crumb'
import { TCrumb } from '@/common/types/misc/crumb.type'

export type TBreadcrumbsProps = {
  crumbs: TCrumb[]
  className?: string
}

export const Breadcrumbs = ({ crumbs, className = '' }: TBreadcrumbsProps) => {
  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2">
        {crumbs.map((crumb, idx) => (
          <span key={idx} className={`inline-flex items-center space-x-2`}>
            <Crumb {...crumb} isFirst={idx === 0} />
            {idx < crumbs.length - 1 && <ChevronRightIcon />}
          </span>
        ))}
      </ol>
    </nav>
  )
}
