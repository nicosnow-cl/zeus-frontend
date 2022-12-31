import { Divider, Grid, Typography, useTheme } from '@mui/material';

import EscortType from '../../../types/type.escort';
import SimpleAvatar from '../../UIElements/SimpleAvatar';
import styles from './index.module.scss';

export interface IHeaderSectionProps {
  age: number;
  avatarImg: string;
  bannerImg: string;
  name: string;
  type: EscortType;
}

const HeaderSection = ({ age, avatarImg, bannerImg, name, type }: IHeaderSectionProps) => {
  const theme = useTheme();

  return (
    <div>
      <div
        className={`w-100 d-flex fd-column jc-between ${styles.banner}`}
        style={{ height: 300, backgroundImage: `url(${bannerImg})` }}
      />

      <div style={{ backgroundColor: theme.palette.grey[200] }}>
        <Grid container spacing={[2, 0]}>
          <Grid
            className={`d-flex jc-center`}
            item
            xs={12}
            sm={5}
            md={4}
            sx={{ position: 'relative', height: 110 }}
          >
            <div
              style={{
                position: 'absolute',
                width: 200,
                height: 200,
                bottom: 0,
                margin: '0 auto',
              }}
            >
              <SimpleAvatar src={avatarImg} />
            </div>
          </Grid>

          <Grid className={`d-flex ai-center col-gap-3`} item xs={12} sm={7} md={8}>
            <Typography className={`mr-2 ${styles.title}`} variant="h2">
              {name}
              <span className={`${styles.subtitle}`}>, {age} años</span>
            </Typography>
            <Divider orientation="vertical" sx={{ maxHeight: '65%' }} />
            <Typography className={`ml-2 ${styles.type}`} variant="h3">
              Acompañante {type}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HeaderSection;
