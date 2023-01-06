import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import LocationOn from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';

import EscortType from '../../../../types/type.escort';
import formatNumberToString from '../../../../helpers/formatNumberToString';
import ILocation from '../../../../interfaces/objects/interface.location';
import IRrSs from '../../../../interfaces/objects/interface.rrss';
import RrssMenuButton, { getRrssButton } from '../../RrssMenuButton';
import styles from './index.module.scss';

export interface IVipPremiumCardFooter {
  location: ILocation;
  price: number;
  rrss?: IRrSs[];
  type: EscortType;
}

const VipPremiumCardFooter = ({ location, price, rrss = [], type }: IVipPremiumCardFooter) => {
  return (
    <div className={`p-1 d-flex jc-between ai-center`}>
      {type === 'VIP' ? (
        <>
          <Button
            className={`${styles.btn}`}
            startIcon={<LocationOn />}
            sx={(theme) => ({ color: theme.palette.getContrastText(theme.palette.grey[400]) })}
          >
            <Typography variant="body2">{location.name}</Typography>
          </Button>

          {rrss.length > 0 && (
            <>{rrss.length === 1 ? getRrssButton(rrss[0]) : <RrssMenuButton rrss={rrss} />}</>
          )}
        </>
      ) : (
        <>
          {rrss.length > 0 && (
            <>{rrss.length === 1 ? getRrssButton(rrss[0]) : <RrssMenuButton rrss={rrss} />}</>
          )}
        </>
      )}

      <Chip
        label={`$${formatNumberToString(price)} - 1h`}
        sx={(theme) => ({ color: theme.palette.success.dark, fontSize: 16 })}
      />
    </div>
  );
};

export default VipPremiumCardFooter;
