import { useRef, useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

import getGridDataCards from '../../../helpers/getGridDataCards';
import GridTransition from '../../UIElements/GridTransition';
import IEscort from '../../../interfaces/states/interface.escort';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './index.module.scss';
import useGrid from '../../../hooks/useGrid';

export interface ICardsSectionProps {
  cards: IEscort[];
}

const CardsSection = ({ cards }: ICardsSectionProps) => {
  const [width, setWidth] = useState<number>(0);
  const [{ columnsHeights, gridItems }, gridControls] = useGrid({
    items: cards,
    width,
    defaultLimit: 12,
    gridFunction: getGridDataCards,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const current = containerRef.current;
    if (!current) return;

    setWidth(current.offsetWidth); // initial width

    const handleResize = debounce(() => {
      setWidth(current.offsetWidth);
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [containerRef]);

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
        next={() => gridControls.next()}
        loader={<></>}
      >
        <GridTransition items={gridItems} containerRef={containerRef} />
      </InfiniteScroll>
    </div>
  );
};

export default CardsSection;
