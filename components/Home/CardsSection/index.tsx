import { useRef, useState, useLayoutEffect } from 'react';
import debounce from 'lodash/debounce';

import getGridDataCards from '../../../helpers/getGridDataCards';
import GridTransition from '../../UIElements/GridTransition';
import ICard from '../../../interfaces/states/interface.card';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './index.module.scss';
import useGrid from '../../../hooks/useGrid';

export interface ICardsSectionProps {
  cards: ICard[];
}

const CardsSection = ({ cards }: ICardsSectionProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number>(0);
  const [{ columnsHeights, gridItems }, gridControls] = useGrid({
    items: cards,
    width,
    defaultLimit: 12,
    gridFunction: getGridDataCards,
  });

  useLayoutEffect(() => {
    const current = containerRef.current;
    if (!current) return;

    if (!width) setWidth(current.offsetWidth); // initial width

    const handleResize = debounce(() => {
      setWidth(current.offsetWidth);
    }, 200);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [containerRef, width]);

  console.count('CardsSection render');

  return (
    <div
      ref={containerRef}
      className={`${styles.cardsContainer}`}
      style={{ height: Math.max(...columnsHeights) }}
    >
      <InfiniteScroll
        dataLength={gridItems.length}
        hasMore={gridItems.length <= cards.length}
        loader={<></>}
        next={() => gridControls.next()}
        scrollThreshold={0.95}
      >
        <GridTransition items={gridItems} containerRef={containerRef} />
      </InfiniteScroll>
    </div>
  );
};

export default CardsSection;
