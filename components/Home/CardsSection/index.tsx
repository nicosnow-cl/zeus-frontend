import { useRef, useState, useEffect, useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useDebouncedCallback from 'beautiful-react-hooks/useDebouncedCallback';
import useWindowResize from 'beautiful-react-hooks/useWindowResize';
// import orderBy from 'lodash/orderBy';

import { AppContext } from '../../../pages/_app';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import CardsSorter from '../CardsSorter';
import getGridDataCards from '../../../helpers/getGridDataCards';
import GridTransition from '../../UIElements/GridTransition';
import ICard from '../../../interfaces/states/interface.card';
import ISort from '../../../interfaces/states/interface.sort';
import styles from './index.module.scss';
import useGrid from '../../../hooks/useGrid';

export interface ICardsSectionProps {
  cards: ICard[];
}

const handleSort = (cards: ICard[], sort: ISort) => {
  const { field, order } = sort;

  if (field === 'none') return cards;

  const vip = cards.filter((card) => card.type === 'VIP');
  const premium = cards.filter((card) => card.type === 'PREMIUM');
  const gold = cards.filter((card) => card.type === 'GOLD');

  switch (field) {
    case 'age':
      const vipAge = vip.sort((cardA, cardB) =>
        order === 'asc' ? cardA.age - cardB.age : cardB.age - cardA.age,
      );
      const premiumAge = premium.sort((cardA, cardB) =>
        order === 'asc' ? cardA.age - cardB.age : cardB.age - cardA.age,
      );
      const goldAge = gold.sort((cardA, cardB) =>
        order === 'asc' ? cardA.age - cardB.age : cardB.age - cardA.age,
      );

      return [...vipAge, ...premiumAge, ...goldAge];
    case 'price':
      const vipPrice = vip.sort((cardA, cardB) =>
        order === 'asc' ? cardA.price - cardB.price : cardB.price - cardA.price,
      );
      const premiumPrice = premium.sort((cardA, cardB) =>
        order === 'asc' ? cardA.price - cardB.price : cardB.price - cardA.price,
      );
      const goldPrice = gold.sort((cardA, cardB) =>
        order === 'asc' ? cardA.price - cardB.price : cardB.price - cardA.price,
      );

      return [...vipPrice, ...premiumPrice, ...goldPrice];

    case 'likes':
      const vipLikes = vip.sort((cardA, cardB) =>
        order === 'asc' ? cardA.likes - cardB.likes : cardB.likes - cardA.likes,
      );
      const premiumLikes = premium.sort((cardA, cardB) =>
        order === 'asc' ? cardA.likes - cardB.likes : cardB.likes - cardA.likes,
      );
      const goldLikes = gold.sort((cardA, cardB) =>
        order === 'asc' ? cardA.likes - cardB.likes : cardB.likes - cardA.likes,
      );

      return [...vipLikes, ...premiumLikes, ...goldLikes];
    case 'name':
      const vipName = vip.sort((cardA, cardB) =>
        order === 'asc'
          ? cardA.name.localeCompare(cardB.name)
          : cardB.name.localeCompare(cardA.name),
      );
      const premiumName = premium.sort((cardA, cardB) =>
        order === 'asc'
          ? cardA.name.localeCompare(cardB.name)
          : cardB.name.localeCompare(cardA.name),
      );
      const goldName = gold.sort((cardA, cardB) =>
        order === 'asc'
          ? cardA.name.localeCompare(cardB.name)
          : cardB.name.localeCompare(cardA.name),
      );

      return [...vipName, ...premiumName, ...goldName];
    default:
      return cards;
  }
};

const CardsSection = ({ cards }: ICardsSectionProps) => {
  const sort = useSelector((state: RootState) => state.ui.sort);
  const [width, setWidth] = useState<number>(0);
  const [{ columnsHeights, gridItems }, gridControls] = useGrid({
    items: handleSort(cards, sort),
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
  const containerHeight =
    Math.max(...columnsHeights) > 0 ? Math.max(...columnsHeights) + 54 : '654px';

  console.count('CardsSection render');

  return (
    <div
      ref={containerRef}
      className={`${styles.cardsContainer}`}
      style={{ height: containerHeight, textAlign: 'right' }}
    >
      <CardsSorter />

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
