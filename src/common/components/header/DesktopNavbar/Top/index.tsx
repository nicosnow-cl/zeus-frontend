import { Button } from '@chakra-ui/react';

import { CoinIcon } from '../../../icons/Coin';
import { NavbarTop, NavbarTopProps } from '../../../ui/NavbarTop';

export interface ITopBarProps {
  menu?: React.ReactNode;
  navbarTopProps?: NavbarTopProps;
}

const Top = ({ menu, navbarTopProps }: ITopBarProps) => {
  return (
    <NavbarTop {...navbarTopProps}>
      {menu}

      <Button colorScheme="primary" rounded="0" rightIcon={<CoinIcon />}>
        ANUNCIARME
      </Button>
    </NavbarTop>
  );
};

export default Top;
