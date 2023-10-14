import { HighLightBorder } from '@/common/ui/highlight-border';
import { RootProps } from '@/features/home/types/components/user-card-props.type';

export const Root = ({ children }: RootProps) => (
  <div className={`group relative cursor-pointer border border-gray-6 bg-gray-7 drop-shadow`}>
    <HighLightBorder className="hidden group-hover:block" />

    {children}
  </div>
);
