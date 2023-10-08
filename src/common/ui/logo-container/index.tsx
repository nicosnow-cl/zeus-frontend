import { Box } from '@radix-ui/themes';

export interface IProps {
  children?: React.ReactNode;
}

export const LogoContainer = ({ children }: IProps) => {
  return (
    <Box
      className={`pr-4 flex flex-column items-center gap-x-3 rounded-r-5 bg-woodsmoke-50 text-woodsmoke-950 border-r border-gray-5`}
      style={{ borderTopRightRadius: '0' }}
    >
      {children}
    </Box>
  );
};
