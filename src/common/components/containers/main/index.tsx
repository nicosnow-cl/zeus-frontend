import { NavbarContainer } from '../navbar'

export interface MainContainerProps {
  children: React.ReactNode | React.ReactNode[]
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <>
      <NavbarContainer />

      <main className="pt-[70px]">{children}</main>
    </>
  )
}
