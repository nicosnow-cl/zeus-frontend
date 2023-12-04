import { NavbarContainer } from '../navbar'

export interface MainContainerProps {
  children: React.ReactNode | React.ReactNode[]
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <>
      <div className="h-[var(--navbar-full-height)] bg-shade-900">
        <NavbarContainer />
      </div>

      <main className="flex flex-col gap-y-5">{children}</main>
    </>
  )
}
