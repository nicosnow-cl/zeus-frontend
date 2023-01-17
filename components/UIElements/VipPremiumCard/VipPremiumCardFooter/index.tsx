import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import LocationOn from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';

import EscortType from '../../../../types/type.escort';
import formatNumberToString from '../../../../helpers/formatNumberToString';
import ILocation from '../../../../interfaces/objects/interface.location';
import IPrice from '../../../../interfaces/objects/interface.price';
import IRrSs from '../../../../interfaces/objects/interface.rrss';
import RrssMenuButton, { getRrssButton } from '../../RrssMenuButton';
import styles from './index.module.scss';

export interface IVipPremiumCardFooter {
  hasPromo: boolean;
  location: ILocation;
  price: IPrice;
  rrss?: IRrSs[];
  type: EscortType;
}

const VipPremiumCardFooter = ({
  hasPromo,
  location,
  price,
  rrss = [],
  type,
}: IVipPremiumCardFooter) => {
  return (
    <div className={`p-1 d-flex jc-between ai-center`}>
      {type === 'VIP' ? (
        <>
          <Button
            className={`${styles.btn}`}
            size="small"
            startIcon={<LocationOn />}
            sx={(theme) => ({ color: theme.palette.getContrastText(theme.palette.grey[400]) })}
          >
            {location.name}
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

      <Box
        className={`py-1 px-2`}
        sx={(theme) => ({
          backgroundColor: theme.palette.grey[300],
          borderRadius: 4,
          color: theme.palette.success.main,
          fontSize: 16,
        })}
      >
        {hasPromo ? (
          <>
            <Typography
              color="grey"
              style={{ textDecorationLine: 'line-through', fontSize: 10, lineHeight: 1 }}
              textAlign="center"
            >
              ${formatNumberToString(price.price)}
            </Typography>
            <Typography>${formatNumberToString(price.promo)} - 1h</Typography>
          </>
        ) : (
          <Typography>${formatNumberToString(price.promo)} - 1h</Typography>
        )}
      </Box>
    </div>
  );
};

export default VipPremiumCardFooter;
