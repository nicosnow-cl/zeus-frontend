import { Grid } from '@mui/material';
import { useRef } from 'react';

import AnimatedCard from '../../UIElements/AnimatedCard';
import EscortType from '../../../types/type.escort';
import GoldCard from '../../UIElements/GoldCard';
import IEscort from '../../../interfaces/states/interface.escort';
import PremiumCard from '../../UIElements/PremiumCard';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import VipCard from '../../UIElements/VipCard';

export interface ICardsSectionProps {
  cards: IEscort[];
  type: EscortType;
}

const CardsSection = ({ cards, type }: ICardsSectionProps) => {
  const containerRef = useRef(null);
  const containerIsVisible = useIntersectionObserver(containerRef);

  return (
    <Grid
      container
      ref={containerRef}
      spacing={[2, 2]}
      sx={{ height: containerIsVisible ? 'auto' : '1000px' }}
    >
      {containerIsVisible &&
        cards.map((data, idx) => {
          return (
            <Grid key={idx} item xs={12} sm={6} md={4} xl={3}>
              <AnimatedCard delay={0.35 * idx}>
                {
                  {
                    VIP: <VipCard data={data} />,
                    PREMIUM: <PremiumCard data={data} />,
                    GOLD: <GoldCard data={data} />,
                  }[type]
                }
              </AnimatedCard>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default CardsSection;
