import IGridData, { IGridItem } from '../interfaces/objects/interface.grid-data';
import ICard from '../interfaces/states/interface.card';

const getGridDataCards = (cards: ICard[], width: number, columns: number): IGridData => {
  const columnsHeights: number[] = new Array(columns).fill(0); // Each column gets a height starting with zero
  let prevCol = -1;
  let prevItemPos = { x: 0, y: 0 };
  let prevZIndex = 999;

  const gridItems = cards.map((card, idx) => {
    const { x: prevX, y: prevY } = prevItemPos;
    const column = prevCol + 1 === columns ? 0 : prevCol + 1; // Start by adding to the first column, if it's full, move to the second, etc.

    const cardHeight = card.type === 'VIP' ? 668 : card.type === 'PREMIUM' ? 568 : 420;
    const endingX = (width / columns) * column; // x = container width / number of columns * column index,
    const endingY = (columnsHeights[column] += cardHeight) - cardHeight; // y = it's just the height of the current column

    const gridItem: IGridItem = {
      data: card,
      endingX,
      endingY,
      height: cardHeight,
      id: idx,
      initialX: prevX,
      initialY: prevY,
      width: width / columns,
      zIndex: prevZIndex - idx,
    };

    prevCol = column;
    prevItemPos = { x: endingX, y: endingY };
    prevZIndex -= 1;

    return gridItem;
  });

  return { columnsHeights, gridItems };
};

export default getGridDataCards;
