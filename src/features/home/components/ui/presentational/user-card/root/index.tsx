import { HighLightBorder } from '@/common/components/ui/effects/highlight-border'

export type RootProps = {
  children?: React.ReactNode
  onClik?: (evt: React.MouseEvent<HTMLElement>) => void
}

export const Root = ({ children, onClik }: RootProps) => (
  <div
    className={`group relative cursor-pointer border border-gray-6 drop-shadow`}
    onClick={onClik}
  >
    <HighLightBorder className="hidden group-hover:block" />

    {children}
  </div>
)
