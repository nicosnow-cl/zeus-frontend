import { useState } from 'react';
import Grid from '@mui/material/Grid';

import AnimatedCard from '../../UIElements/AnimatedCard';
import LoadingCard from '../../UIElements/LoadingCard';

export interface ILoadingHomeProps {
  cardsNumber?: number;
}

const LoadingHome = ({ cardsNumber = 12 }: ILoadingHomeProps) => {
  const [cards] = useState<number[]>(Array.from(Array(cardsNumber).keys()));

  return (
    <Grid container spacing={[2, 2]}>
      {cards.map((_, idx) => (
        <Grid key={idx} item xs={12} sm={6} xl={3}>
          <AnimatedCard delay={0.25 * (idx + 1)}>
            <LoadingCard />
          </AnimatedCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default LoadingHome;
