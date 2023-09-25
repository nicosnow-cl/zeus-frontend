import { useCallback, useMemo, useState } from 'react';

import getGridDataDefault from '../helpers/getGridDataDefault';

export interface IUseGridProps {
  defaultLimit?: number;
  defaultStart?: number;
  gridFunction?: (items: any[], width: number, columns: number) => any;
  items: any[];
  minRows?: number;
  width: number;
}

const DEFAULT_MIN_ROWS = 2;

const useGrid = ({
  defaultLimit,
  defaultStart = 0,
  items,
  minRows = DEFAULT_MIN_ROWS,
  width,
  gridFunction = getGridDataDefault,
}: IUseGridProps) => {
  const [start, setStart] = useState<number>(defaultStart);
  const [limit, setLimit] = useState<number>(defaultLimit || items?.length);

  const totalColumns = getColumns(width);
  const stepFactor = Math.max(totalColumns * minRows, 4);

  const next = useCallback(() => {
    if (limit >= items.length) return;

    setLimit((prev) => prev + stepFactor);
  }, [items.length, limit, stepFactor]);

  const itemsSplitted = items.slice(start, limit);

  return useMemo(
    () => [gridFunction(itemsSplitted, width, totalColumns), { setStart, setLimit, next }],
    [gridFunction, itemsSplitted, width, totalColumns, setStart, setLimit, next],
  );
};

export default useGrid;

function getColumns(width: number) {
  if (width >= 1500) return 4;
  if (width >= 1000) return 3;
  if (width > 600) return 2;
  return 1;
}
