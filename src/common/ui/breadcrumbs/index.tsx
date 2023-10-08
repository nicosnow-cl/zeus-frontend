import { ICrumb } from '@/common/interfaces/crumb.interface';
import { Crumb } from '../crumb';
import { ChevronRight } from 'react-bootstrap-icons';

export interface IProps {
  crumbs: ICrumb[];
}

export const Breadcrumbs = ({ crumbs }: IProps) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
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
