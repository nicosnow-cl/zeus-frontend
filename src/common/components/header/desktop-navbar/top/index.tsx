'use client';

import { Box, Button, Card } from '@radix-ui/themes';

export interface IProps {
  start?: React.ReactNode;
  //   navbarTopProps?: NavbarTopProps;
}

export const Top = ({ start }: IProps) => {
  const handleClick = () => console.log('click');

  return (
    <Box
      className={`flex justify-between bg-gray-2 border-b border-gray-5`}
      style={{ height: '40px' }}
    >
      {start}

      <Button
        className={`h-full cursor-pointer`}
        size="3"
        radius="none"
        color="crimson"
        onClick={handleClick}
      >
        ANUNCIARME
      </Button>
    </Box>
  );
};
