import { useState } from 'react';
import Facebook from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
import Instagram from '@mui/icons-material/Instagram';
import Menu from '@mui/material/Menu';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import Twitter from '@mui/icons-material/Twitter';
import WhatsApp from '@mui/icons-material/WhatsApp';

import IRrSs from '../../../interfaces/objects/interface.rrss';
import styles from './index.module.scss';

export interface IRrssMenuButtonProps {
  rrss: IRrSs[];
}

export const getRrssButton = (rrss: IRrSs, idx?: number, color?: string) => {
  switch (rrss.type) {
    case 'facebook':
      return (
        <IconButton
          key={idx}
          className={`${styles.btn}`}
          onClick={() => window.open(rrss.url, '_blank')}
          sx={{ color }}
        >
          <Facebook />
        </IconButton>
      );
    case 'instagram':
      return (
        <IconButton
          key={idx}
          className={`${styles.btn}`}
          onClick={() => window.open(rrss.url, '_blank')}
          sx={{ color }}
        >
          <Instagram />
        </IconButton>
      );
    case 'twitter':
      return (
        <IconButton
          key={idx}
          className={`${styles.btn}`}
          onClick={() => window.open(rrss.url, '_blank')}
          sx={{ color }}
        >
          <Twitter />
        </IconButton>
      );
    case 'whatsapp':
      return (
        <IconButton
          key={idx}
          className={`${styles.btn}`}
          onClick={() => window.open(rrss.url, '_blank')}
          sx={{ color }}
        >
          <WhatsApp />
        </IconButton>
      );
    default:
      return <></>;
  }
};

const RrssMenuButton = ({ rrss }: IRrssMenuButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    evt.stopPropagation();
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreHoriz />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 'calc(50% - 5px)',
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        {rrss.map((rrss, idx) => getRrssButton(rrss, idx))}
      </Menu>
    </>
  );
};

export default RrssMenuButton;
