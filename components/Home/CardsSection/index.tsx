import { useMemo, useRef, useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

import EscortType from '../../../types/type.escort';
import GridTransition from './GridTransition';
import IEscort from '../../../interfaces/states/interface.escort';
import styles from './index.module.scss';

export interface ICardsSectionProps {
  cards: IEscort[];
  type: EscortType;
}

const getHeightsAndGridItems = (cards: IEscort[], width: number, columns: number) => {
  let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
  let prevCol = -1;
  let prevCardPos = { x: 0, y: 0 };

  let gridItems = cards.map((card, i) => {
    const { x: prevX, y: prevY } = prevCardPos;
    const column = prevCol + 1 === columns ? 0 : prevCol + 1; // Start by adding to the first column, if it's full, move to the second, etc.

    const x = (width / columns) * column; // x = container width / number of columns * column index,
    const y = (heights[column] += 668) - 668; // y = it's just the height of the current column

    prevCol = column;
    prevCardPos = { x, y };

    return { idx: i, data: card, prevX, prevY, x, y, width: width / columns, height: 668 };
  });

  return [heights, gridItems];
};

const getColumns = (width: number) => {
  if (width >= 1500) return 4;
  if (width >= 1000) return 3;
  if (width >= 600) return 2;
  return 1;
};

const CardsSection = ({ cards, type }: ICardsSectionProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const current = containerRef.current;

    if (!current) return;
    if (!width) setWidth(current.offsetWidth);

    const handleResize = debounce((evt) => {
      setWidth(current.offsetWidth);
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [containerRef, width]);

  const columns = getColumns(width);
  const [heights, gridItems] = useMemo(
    () => getHeightsAndGridItems(cards, width, columns),
    [cards, width, columns],
  );

  console.count('CardsSection render');
  console.log(cards.length);

  return (
    <div
      ref={containerRef}
      className={`${styles.cardsContainer}`}
      style={{ height: Math.max(...heights) }}
    >
      {width > 0 && <GridTransition items={gridItems} />}
    </div>
  );
};

export default CardsSection;
