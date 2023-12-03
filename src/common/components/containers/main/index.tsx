import { NavbarContainer } from '../navbar'

export interface MainContainerProps {
  children: React.ReactNode | React.ReactNode[]
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <>
      <NavbarContainer />

      <main className="flex flex-col gap-y-5 pt-[70px]">{children}</main>
    </>
  )
}
