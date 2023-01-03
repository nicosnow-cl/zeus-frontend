import { useState } from 'react';
import Facebook from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
import Instagram from '@mui/icons-material/Instagram';
import Menu from '@mui/material/Menu';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import Twitter from '@mui/icons-material/Twitter';
import useTheme from '@mui/material/styles/useTheme';
import WhatsApp from '@mui/icons-material/WhatsApp';

import IRrSs from '../../../interfaces/objects/interface.rrss';
import styles from './index.module.scss';

export interface IRrSsButtonProps {
  rrss: IRrSs[];
}

const getRRSSButton = (rrss: IRrSs, color: string) => {
  switch (rrss.type) {
    case 'facebook':
      return (
        <IconButton className={`${styles.btn}`} sx={{ color }}>
          <Facebook />
        </IconButton>
      );
    case 'instagram':
      return (
        <IconButton className={`${styles.btn}`} sx={{ color }}>
          <Instagram />
        </IconButton>
      );
    case 'twitter':
      return (
        <IconButton className={`${styles.btn}`} sx={{ color }}>
          <Twitter />
        </IconButton>
      );
    case 'whatsapp':
      return (
        <IconButton className={`${styles.btn}`} sx={{ color }}>
          <WhatsApp />
        </IconButton>
      );
    default:
      return <></>;
  }
};

const RrSsButton = ({ rrss }: IRrSsButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    evt.stopPropagation();
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {rrss.map((rrss) => getRRSSButton(rrss, theme.palette.grey[900]))}
      </Menu>
    </div>
  );
};

export default RrSsButton;
