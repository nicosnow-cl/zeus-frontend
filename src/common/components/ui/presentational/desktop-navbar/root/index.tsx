export const Root = (props: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>) => {
  const { className = '', children, ...restProps } = props

  console.count('DesktopNavbar.Root')

  return (
    <nav className={`fixed z-40 w-screen bg-transparent ${className}`} {...restProps}>
      <div className="relative">{children}</div>
    </nav>
  )
}
