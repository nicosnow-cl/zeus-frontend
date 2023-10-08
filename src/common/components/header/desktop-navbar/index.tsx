import { Top } from './top';
import { Down } from './down';
import { Logo } from '../logo';

export const DesktopNavbar = () => {
  return (
    <div>
      <Top start={<Logo />} />
      <Down />
    </div>
  );
};
