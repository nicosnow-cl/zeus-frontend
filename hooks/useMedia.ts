import { useCallback, useEffect, useState } from 'react';

const useMedia = (queries: string[], values: number[], defaultValue: number) => {
  const match = useCallback(
    () => values[queries.findIndex((q) => matchMedia(q).matches)] || defaultValue,
    [queries, values, defaultValue],
  );
  const [value, set] = useState(match);

  useEffect(() => {
    const handler = () => set(match);
    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, [match]);

  return value;
};

export default useMedia;
