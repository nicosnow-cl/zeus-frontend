const createArray = (
  length: number,
  fill: any = undefined,
  increase: (i: number) => number = (i) => i,
) => {
  return Array(length)
    .fill(fill)
    .map((_, i) => increase(i));
};

export default createArray;
