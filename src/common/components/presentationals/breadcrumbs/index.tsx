import { twMerge } from 'tailwind-merge'

import { ChevronRightIcon } from '@/common/icons'
import { Crumb } from '../crumb'
import { Crumb as TCrumb } from '@/common/types/misc/crumb.type'

export type BreadcrumbsProps = {
  crumbs: TCrumb[]
  containerProps?: React.ComponentProps<'nav'>
}

export const Breadcrumbs = ({ crumbs, containerProps }: BreadcrumbsProps) => {
  const { className = '' } = containerProps ?? {}
  const classes = twMerge('flex text-sm', className)

  return (
    <nav className={classes} aria-label="Breadcrumb">
      <ul className="inline-flex items-center space-x-2">
        {crumbs.map((crumb, idx) => (
          <li key={idx} className={`inline-flex items-center space-x-2`}>
            {idx < crumbs.length - 1 ? (
              <>
                <Crumb {...crumb} isFirst={idx === 0} />
                <ChevronRightIcon />
              </>
            ) : (
              <p>{crumb.label}</p>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}