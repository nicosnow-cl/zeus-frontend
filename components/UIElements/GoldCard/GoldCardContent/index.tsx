import { Chip, Typography, useTheme } from '@mui/material';
import { Favorite, Verified } from '@mui/icons-material';

import abbreviateNumber from '../../../../helpers/abbreviateNumber';
import formatNumberToString from '../../../../helpers/formatNumberToString';
import styles from './index.module.scss';

export interface IGoldCardContentProps {
  age: number;
  likes: number;
  name: string;
  nationality: string;
  price: number;
}

const GoldCardContent = ({ age, likes, name, nationality, price }: IGoldCardContentProps) => {
  const theme = useTheme();

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

        <Chip
          label={`$${formatNumberToString(price)} - 1h`}
          sx={{
            backgroundColor: theme.palette.grey[300],
            color: theme.palette.success.dark,
            fontSize: 16,
          }}
        />
      </div>
    </div>
  );
};

export default GoldCardContent;
