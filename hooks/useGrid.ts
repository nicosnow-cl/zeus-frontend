import { useState } from 'react';

import getGridDataDefault from '../helpers/getGridDataDefault';

export interface IUseGrid {
  items: any[];
  width: number;
  defaultStart?: number;
  minRows?: number;
  defaultLimit?: number;
  gridFunction?: (items: any[], width: number, columns: number) => any;
}

const DEFAULT_MIN_ROWS = 2;

const useGrid = ({
  items,
  width,
  defaultStart = 0,
  minRows = DEFAULT_MIN_ROWS,
  defaultLimit,
  gridFunction = getGridDataDefault,
}: IUseGrid) => {
  const [start, setStart] = useState<number>(defaultStart);
  const [limit, setLimit] = useState<number>(defaultLimit || items?.length);

  const totalColumns = getColumns(width);
  const stepFactor = totalColumns * minRows;
  const next = () => {
    if (limit >= items.length) return;

    setLimit((prev) => prev + stepFactor);
  };

  if (!items || !width)
    return [
      { columnsHeights: [], gridItems: [] },
      { setStart, setLimit, next },
    ] as const;

  const itemsSplitted = items.slice(start, limit);

  return [gridFunction(itemsSplitted, width, totalColumns), { setStart, setLimit, next }] as const;
};

export default useGrid;

function getColumns(width: number) {
  if (width >= 1500) return 4;
  if (width >= 1000) return 3;
  if (width >= 600) return 2;
  return 1;
}
