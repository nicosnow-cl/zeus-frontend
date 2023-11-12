export const Root = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
) => {
  const { className = '', ...restProps } = props

  return <nav className={`fixed z-40 w-screen bg-transparent ${className}`} {...restProps} />
}
