import { RootProps } from '@/features/home/types/components/user-card-props.type';

export const Root = ({ children }: RootProps) => (
  <div className={`group relative cursor-pointer overflow-hidden border border-gray-6 drop-shadow`}>
    {children}
  </div>
);
