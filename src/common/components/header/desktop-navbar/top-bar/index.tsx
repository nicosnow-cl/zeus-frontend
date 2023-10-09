'use client';

import { Box, Button } from '@radix-ui/themes';

export interface IProps {
  start?: React.ReactNode;
}

export const TopBar = ({ start }: IProps) => {
  const handleClick = () => console.log('click');

  return (
    <Box
      className={`h-[40px] flex justify-between bg-woodsmoke-950/80 text-woodsmoke-50 backdrop-blur-md backdrop-saturate-150 
      border-b border-b-woodsmoke-200`}
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
