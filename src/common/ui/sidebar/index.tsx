import { Box } from '@radix-ui/themes';

export const Sidebar = ({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <Box
    className={`
      fixed h-full w-[40px] overflow-hidden flex flex-col gap-y-5 bg-woodsmoke-950/80 text-woodsmoke-50 
      backdrop-blur-md backdrop-saturate-150 transition-[width] duration-300 ease-in-out hover:w-[170px]
      ${className}
      `}
    {...props}
  >
    {children}
  </Box>
);
