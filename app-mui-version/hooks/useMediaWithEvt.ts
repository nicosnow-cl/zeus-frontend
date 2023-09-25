import { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

const useMediaWithEvt = (queries: string[], values: number[], defaultValue: number) => {
  const match = () => values[queries.findIndex((q) => matchMedia(q).matches)] || defaultValue;
  const [value, set] = useState(match);

  const handler = useCallback(
    debounce(() => {
      set(match());
    }, 1000),
    [],
  );

  useEffect(() => {
    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, [handler]);

  return value;
};

export default useMediaWithEvt;
