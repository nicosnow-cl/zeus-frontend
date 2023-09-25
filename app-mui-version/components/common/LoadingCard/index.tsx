import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

import styles from './index.module.scss';

const LoadingCard = () => {
  return (
    <Card className={`pointer h-100 d-flex fd-column ${styles.card}`}>
      <CardContent className={`${styles.cardContent}`}>
        <div className={`${styles.cardMedia}`}>
          <Skeleton className={`h-100 w-100 ${styles.cardMediaSkeleton}`} />
        </div>

        <div className={`pt-3 px-2 w-100 d-flex jc-between ai-start ${styles.cardTop}`}>
          <Skeleton className={`${styles.skeletonNoTransform}`} width={130} height={30} />

          <div className={`d-flex fd-column row-gap-1`}>
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
          </div>
        </div>

        <div className={`p-2 d-flex jc-between ai-center ${styles.cardFooter}`}>
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
        </div>
      </CardContent>
    </Card>
  );
};

export default LoadingCard;
