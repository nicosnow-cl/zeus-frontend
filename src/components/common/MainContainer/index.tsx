import { Box } from '@chakra-ui/react';

export interface IMainContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

const MainContainer = ({ children }: IMainContainerProps) => {
  return (
    <Box w="100%" h="100vh" bgGradient={'linear(to-b, gray.50, gray.300)'}>
      {children}
    </Box>
  );
};

export default MainContainer;
