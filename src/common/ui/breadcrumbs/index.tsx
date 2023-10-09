import { ChevronRight } from 'react-bootstrap-icons';
import { Crumb } from '../crumb';
import { ICrumb } from '@/common/interfaces/crumb.interface';

export interface IProps {
  crumbs: ICrumb[];
  className?: string;
}

export const Breadcrumbs = ({ crumbs, className = '' }: IProps) => {
  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {crumbs.map((crumb, idx) => (
          <span key={idx} className={`inline-flex items-center space-x-1 md:space-x-3`}>
            <Crumb crumb={crumb} />
            {idx < crumbs.length - 1 && <ChevronRight />}
          </span>
        ))}
      </ol>
    </nav>
  );
};
