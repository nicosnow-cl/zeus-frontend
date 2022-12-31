import { Box } from '@mui/system';
import { Button, Chip, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { Facebook, Instagram, LocationOn, Twitter, WhatsApp } from '@mui/icons-material';

import formatNumberToString from '../../../../utils/formatNumberToString';
import ILocation from '../../../../interfaces/objects/interface.location';
import IRrSs from '../../../../interfaces/objects/interface.rrss';
import styles from './index.module.scss';

export interface ILadyCardFooter {
  location?: ILocation;
  price?: number;
  rrss?: IRrSs[];
}

const LadyCardFooter = ({ location, price, rrss = [] }: ILadyCardFooter) => {
  const theme = useTheme();

  const getRRSSButton = (rrss: IRrSs) => {
    switch (rrss.type) {
      case 'facebook':
        return (
          <IconButton className={`${styles.btn}`} sx={{ color: theme.palette.grey[900] }}>
            <Facebook />
          </IconButton>
        );
      case 'instagram':
        return (
          <IconButton className={`${styles.btn}`} sx={{ color: theme.palette.grey[900] }}>
            <Instagram />
          </IconButton>
        );
      case 'twitter':
        return (
          <IconButton className={`${styles.btn}`} sx={{ color: theme.palette.grey[900] }}>
            <Twitter />
          </IconButton>
        );
      case 'whatsapp':
        return (
          <IconButton className={`${styles.btn}`} sx={{ color: theme.palette.grey[900] }}>
            <WhatsApp />
          </IconButton>
        );
      default:
        return <></>;
    }
  };

  return (
    <Box className={`p-1 d-flex jc-between ai-center`}>
      {location && (
        <Button
          className={`${styles.btn}`}
          startIcon={<LocationOn />}
          sx={{ color: theme.palette.grey[900] }}
        >
          <Typography variant="body2">{location.name}</Typography>
        </Button>
      )}

      {rrss.length > 0 && (
        <Stack direction={`row`}>{rrss.map((rrss) => getRRSSButton(rrss))}</Stack>
      )}

      {price && (
        <Chip
          label={`$${formatNumberToString(price)} - 1h`}
          sx={{ color: theme.palette.success.dark, fontSize: 16 }}
        />
      )}
    </Box>
  );
};

export default LadyCardFooter;
