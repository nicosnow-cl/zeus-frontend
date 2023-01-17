import Chip from '@mui/material/Chip';
import Favorite from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Verified from '@mui/icons-material/Verified';

import abbreviateNumber from '../../../../helpers/abbreviateNumber';
import formatNumberToString from '../../../../helpers/formatNumberToString';
import styles from './index.module.scss';
import Box from '@mui/system/Box';
import IPrice from '../../../../interfaces/objects/interface.price';

export interface IGoldCardContentProps {
  age: number;
  hasPromo: boolean;
  likes: number;
  name: string;
  nationality: string;
  price: IPrice;
}

const GoldCardContent = ({
  age,
  hasPromo,
  likes,
  name,
  nationality,
  price,
}: IGoldCardContentProps) => {
  return (
    <div className={`w-100 h-100 d-flex fd-column jc-between ${styles.contentContainer}`}>
      <div className={`m-2 d-flex jc-between`}>
        <Typography
          className={`${styles.text}`}
          color="white"
          component="div"
          gutterBottom
          variant="h5"
        >
          {`${name}, ${age}`}
        </Typography>

        <div className={`d-flex fd-column row-gap-1`}>
          <Chip
            className={`${styles.headerChip}`}
            color="primary"
            icon={<Verified />}
            label={`GOLD`}
            size="small"
          />

          <Chip
            className={`${styles.headerChip}`}
            color="primary"
            icon={<Favorite />}
            label={abbreviateNumber(likes)}
            size="small"
          />
        </div>
      </div>

      <div className={`p-2 d-flex jc-between ai-center`}>
        <Typography
          className={`${styles.text} ${styles.nationalityText}`}
          variant="body2"
          color="white"
        >
          {nationality}
        </Typography>

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
    </div>
  );
};

export default GoldCardContent;
