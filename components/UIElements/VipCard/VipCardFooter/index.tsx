import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import LocationOn from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';

import formatNumberToString from '../../../../helpers/formatNumberToString';
import ILocation from '../../../../interfaces/objects/interface.location';
import IRrSs from '../../../../interfaces/objects/interface.rrss';
import styles from './index.module.scss';
import RrSsButton from '../../RrSsButton';

export interface IVipCardFooter {
  location: ILocation;
  price: number;
  rrss?: IRrSs[];
}

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

      {rrss.length > 0 && <RrSsButton rrss={rrss} />}

      <Chip
        label={`$${formatNumberToString(price)} - 1h`}
        sx={{ color: theme.palette.success.dark, fontSize: 16 }}
      />
    </div>
  );
};

export default VipCardFooter;
