import { CSSProperties, useContext } from 'react';
import Button from '@mui/material/Button';

import { AppContext } from '../../../../pages/_app';
import ILink from '../../../../interfaces/objects/interface.link';

export interface INavLinksProps {
  links: ILink[];
  style?: CSSProperties;
}

const NavLinks = ({ links, style = {} }: INavLinksProps) => {
  const { router, theme } = useContext(AppContext);
  const { pathname } = router || { pathname: '' };

  const borderBottom = `2px solid ${theme?.palette.primary.main}`;

  const handleOnClick = (href: string) => {
    if (isLinkActive(href)) return;

    router?.push(href);
  };

  const isLinkActive = (href: string) => {
    if (href === pathname) return true;

    return false;
  };

  return (
    <>
      {links.map((link, idx) => (
        <Button key={idx} onClick={() => handleOnClick(link.href)} style={style}>
          <div
            style={{ borderBottom: isLinkActive(link.href) ? borderBottom : 0, borderRadius: 0 }}
          >
            {link.title}
          </div>
        </Button>
      ))}
    </>
  );
};

export default NavLinks;
