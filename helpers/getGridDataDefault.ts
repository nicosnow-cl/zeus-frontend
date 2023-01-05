import IGridData, { IGridItem } from '../interfaces/objects/interface.grid-data';

const getGridDataDefault = (items: any[], width: number, columns: number): IGridData => {
  const columnsHeights: number[] = new Array(columns).fill(0); // Each column gets a height starting with zero
  let prevCol = -1;
  let prevItemPos = { x: 0, y: 0 };

  const gridItems = items.map((item, idx) => {
    const { x: prevX, y: prevY } = prevItemPos;
    const column = prevCol + 1 === columns ? 0 : prevCol + 1; // Start by adding to the first column, if it's full, move to the second, etc.

    const endingX = (width / columns) * column; // x = container width / number of columns * column index,
    const endingY = (columnsHeights[column] += 668) - 668; // y = it's just the height of the current column

    const gridItem: IGridItem = {
      data: item,
      endingX,
      endingY,
      height: 668,
      id: idx,
      initialX: prevX,
      initialY: prevY,
      width: width / columns,
    };

    prevCol = column;
    prevItemPos = { x: endingX, y: endingY };

    return gridItem;
  });

  return { columnsHeights, gridItems };
};

export default getGridDataDefault;
