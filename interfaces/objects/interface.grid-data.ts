interface IGridData {
  columnsHeights: number[];
  gridItems: IGridItem[];
}

export interface IGridItem {
  data: any;
  endingX: number;
  endingY: number;
  height: number;
  id: number;
  initialX: number;
  initialY: number;
  width: number;
  zIndex?: number;
}

export default IGridData;
