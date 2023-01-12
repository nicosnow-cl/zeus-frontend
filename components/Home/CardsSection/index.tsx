import { useRef, useState, useEffect, useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useDebouncedCallback from 'beautiful-react-hooks/useDebouncedCallback';
import useWindowResize from 'beautiful-react-hooks/useWindowResize';

import { AppContext } from '../../../pages/_app';
import getGridDataCards from '../../../helpers/getGridDataCards';
import GridTransition from '../../UIElements/GridTransition';
import ICard from '../../../interfaces/states/interface.card';
import styles from './index.module.scss';
import useGrid from '../../../hooks/useGrid';

export interface ICardsSectionProps {
  cards: ICard[];
}

const CardsSection = ({ cards }: ICardsSectionProps) => {
  const [width, setWidth] = useState<number>(0);
  const [{ columnsHeights, gridItems }, gridControls] = useGrid({
    items: cards,
    width,
    defaultLimit: 12,
    gridFunction: getGridDataCards,
  });
  const { device } = useContext(AppContext);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const onWindowResize = useWindowResize();

  useEffect(() => {
    const { current } = containerRef;
    if (!current) return;

    setWidth(current.offsetWidth);
  }, [containerRef]);

  const onWindowResizeHandler = useDebouncedCallback(() => {
    const { current } = containerRef;
    if (!current) return;

    setWidth(current.offsetWidth);
  }, [containerRef]);

  onWindowResize(onWindowResizeHandler);
  const containerHeight = Math.max(...columnsHeights) > 0 ? Math.max(...columnsHeights) : '600px';

  console.count('CardsSection render');

  return (
    <div
      ref={containerRef}
      className={`${styles.cardsContainer}`}
      style={{ height: containerHeight }}
    >
      <InfiniteScroll
        dataLength={gridItems.length}
        hasMore={gridItems.length <= cards.length}
        loader={<></>}
        next={() => gridControls.next()}
        scrollThreshold={0.75}
      >
        {gridItems.length > 0 && width > 0 && (
          <GridTransition
            autoHightlight={device?.type === 'mobile'}
            containerRef={containerRef}
            items={gridItems}
          />
        )}
      </InfiniteScroll>
    </div>
  );
};

export default CardsSection;
