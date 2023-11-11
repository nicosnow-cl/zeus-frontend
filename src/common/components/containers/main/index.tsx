import { Grid } from '@radix-ui/themes'
import { NavbarContainer } from '../navbar'

export interface IProps {
  children: React.ReactNode | React.ReactNode[]
}

export const MainContainer = ({ children }: IProps) => {
  return (
    <main>
      <NavbarContainer />

      <div className="pt-[70px]">
        <div className="p-1 sm:p-6 lg:p-9">{children}</div>
      </div>
    </main>
  )
}
