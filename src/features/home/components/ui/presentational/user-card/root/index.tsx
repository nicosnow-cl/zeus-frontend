export type RootProps = {
  children?: React.ReactNode
  onClik?: (evt: React.MouseEvent<HTMLElement>) => void
}

export const Root = ({ children, onClik }: RootProps) => (
  <div
    className={`group relative cursor-pointer overflow-hidden rounded-4 border border-gray-6 drop-shadow`}
    onClick={onClik}
  >
    {children}
  </div>
)
