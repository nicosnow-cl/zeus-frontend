import { Box } from '@mui/system';
import { Card, CardContent, Skeleton } from '@mui/material';

import styles from './index.module.scss';

const LoadingCard = () => {
  return (
    <Card className={`pointer h-100 d-flex fd-column ${styles.card}`}>
      <CardContent className={`${styles.cardContent}`}>
        <Box className={`${styles.cardMedia}`}>
          <Skeleton className={`h-100 w-100 ${styles.cardMediaSkeleton}`} />
        </Box>

        <Box className={`pt-3 px-2 w-100 d-flex jc-between ai-start ${styles.cardTop}`}>
          <Skeleton className={`${styles.skeletonNoTransform}`} width={130} height={30} />

          <Box className={`d-flex fd-column row-gap-1`}>
            <Skeleton
              className={`${styles.skeletonNoTransform}`}
              width={60}
              height={24}
              sx={{ borderRadius: 5 }}
            />
            <Skeleton
              className={`${styles.skeletonNoTransform}`}
              width={60}
              height={24}
              sx={{ borderRadius: 5 }}
            />
          </Box>
        </Box>

        <Box className={`p-2 d-flex jc-between ai-center ${styles.cardFooter}`}>
          <Skeleton
            className={`${styles.skeletonNoTransform}`}
            width={100}
            height={35}
            sx={{ borderRadius: 3 }}
          />
          <Skeleton
            className={`${styles.skeletonNoTransform}`}
            width={150}
            height={32}
            sx={{ borderRadius: 5 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default LoadingCard;
