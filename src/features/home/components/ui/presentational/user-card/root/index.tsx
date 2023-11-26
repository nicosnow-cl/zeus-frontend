export type RootProps = {
  children?: React.ReactNode
  onClik?: (evt: React.MouseEvent<HTMLElement>) => void
}

export const Root = ({ children, onClik }: RootProps) => (
  <div
    className={`group relative cursor-pointer overflow-hidden rounded-3 hover:z-20 hover:scale-[1.03]`}
    onClick={onClik}
  >
    {children}
  </div>
)
