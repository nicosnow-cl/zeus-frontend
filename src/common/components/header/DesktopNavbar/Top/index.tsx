import { Box, Button } from '@chakra-ui/react';

export interface ITopBarProps {
  backgroundColor?: string;
  isVisible?: boolean;
}

const Top = ({ backgroundColor, isVisible = true }: ITopBarProps) => {
  return (
    <Box w="100%" h={isVisible ? '35px' : '0px'} display="flex" justifyContent="end">
      <Button colorScheme="primary" maxH="100%" rounded="0">
        ANUNCIARME
      </Button>
    </Box>
  );
};

export default Top;
