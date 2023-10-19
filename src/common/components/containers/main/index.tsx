import { NavbarContainer } from '../navbar';

export interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export const MainContainer = ({ children }: IProps) => {
  return (
    <>
      <NavbarContainer />

      <div className="pt-[65px]">
        <div className="ml-[40px] p-12">{children}</div>
      </div>
    </>
  );
};
