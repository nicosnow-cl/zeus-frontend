import { Button, Chip, Typography, useTheme } from '@mui/material';
import { LocationOn } from '@mui/icons-material';

import formatNumberToString from '../../../../utils/formatNumberToString';
import ILocation from '../../../../interfaces/objects/interface.location';
import styles from './index.module.scss';

export interface IPremiumCardFooterProps {
  location: ILocation;
  price: number;
}

const PremiumCardFooter = ({ location, price }: IPremiumCardFooterProps) => {
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

      <Chip
        label={`$${formatNumberToString(price)} - 1h`}
        sx={{ color: theme.palette.success.dark, fontSize: 16 }}
      />
    </div>
  );
};

export default PremiumCardFooter;
