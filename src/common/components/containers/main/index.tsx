import { NavbarContainer } from '../navbar'

export interface MainContainerProps {
  children: React.ReactNode | React.ReactNode[]
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <main>
      <NavbarContainer />

      <div className="pt-[70px]">
        <div className="p-1 sm:p-6 lg:p-9">{children}</div>
      </div>
    </main>
  )
}
