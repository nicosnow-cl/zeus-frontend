interface IGridData {
  columnsHeights: number[];
  gridItems: IGridItem[];
}

export interface IGridItem {
  data: any;
  endingX: number;
  endingY: number;
  height: number;
  id: string | number;
  idx: number;
  initialX: number;
  initialY: number;
  width: number;
  zIndex?: number;
}

export default IGridData;
