import { useState } from 'react';

const useMedia = (width: number, queries: string[], values: number[], defaultValue: number) => {
  const match = () => values[queries.findIndex((q) => matchMedia(q).matches)] || defaultValue;
  const [value, set] = useState(match);

  return value;
};

export default useMedia;
