import { useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';

import AnimatedCard from '../../UIElements/AnimatedCard';
import LoadingCard from '../../UIElements/LoadingCard';

export interface ILoadingHomeProps {
  startingCardsNumber?: number;
  maxCardsNumber?: number;
}

const LoadingHome = ({ startingCardsNumber = 8, maxCardsNumber = 24 }: ILoadingHomeProps) => {
  const [cards, setCards] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect((): void => {
    setCards(Array.from(Array(startingCardsNumber).keys()));
  }, [startingCardsNumber]);

  const callback = (entries: IntersectionObserverEntry[]) => {
    const isIntersecting = entries[0]?.isIntersecting ?? false;

    if (isIntersecting) {
      const newCards = Array.from(Array(4).keys());
      setCards((prevCards) => [...prevCards, ...newCards]);
    }
  };

  useEffect(() => {
    if (cards.length >= maxCardsNumber) return;

    const { current } = containerRef;
    const observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 1,
    });

    if (current) observer.observe(current);

    return () => {
      if (current) observer?.unobserve(current);
    };
  }, [containerRef, cards, maxCardsNumber]);

  return (
    <Grid container spacing={[2, 2]}>
      {cards.map((_, idx) => (
        <Grid
          ref={idx === cards.length - 1 ? containerRef : undefined}
          key={idx}
          item
          xs={12}
          sm={6}
          md={4}
          xl={3}
        >
          <AnimatedCard delay={0.25 * (idx + 1)}>
            <LoadingCard />
          </AnimatedCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default LoadingHome;
