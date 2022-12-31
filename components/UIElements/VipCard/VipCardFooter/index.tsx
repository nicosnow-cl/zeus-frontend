import { Button, Chip, IconButton, Typography, useTheme } from '@mui/material';
import { Facebook, Instagram, LocationOn, Twitter, WhatsApp } from '@mui/icons-material';

import formatNumberToString from '../../../../utils/formatNumberToString';
import ILocation from '../../../../interfaces/objects/interface.location';
import IRrSs from '../../../../interfaces/objects/interface.rrss';
import styles from './index.module.scss';

export interface IVipCardFooter {
  location: ILocation;
  price: number;
  rrss?: IRrSs[];
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

const VipCardFooter = ({ location, price, rrss = [] }: IVipCardFooter) => {
  const theme = useTheme();

  return (
    <div className={`p-1 d-flex jc-between ai-center`}>
      <Button
        className={`${styles.btn}`}
        startIcon={<LocationOn />}
        sx={{ color: theme.palette.grey[900] }}
      >
        <Typography variant="body2">{location.name}</Typography>
      </Button>

      {rrss.length > 0 && (
        <div>{rrss.map((rrss) => getRRSSButton(rrss, theme.palette.grey[900]))}</div>
      )}

      <Chip
        label={`$${formatNumberToString(price)} - 1h`}
        sx={{ color: theme.palette.success.dark, fontSize: 16 }}
      />
    </div>
  );
};

export default VipCardFooter;
