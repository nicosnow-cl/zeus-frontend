import { HighLightBorder } from '@/common/components/ui/effects/highlight-border'
import { RootProps } from '@/features/home/types/components/user-card-props.type'

export const Root = ({ children, onClik }: RootProps) => (
  <div
    className={`group relative cursor-pointer border border-gray-6 drop-shadow`}
    onClick={onClik}
  >
    <HighLightBorder className="hidden group-hover:block" />

    {children}
  </div>
)
