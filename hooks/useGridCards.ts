import { RefObject, useCallback, useEffect, useMemo, useState } from 'react';

export interface IUseGridCardsProps {
  containerRef: RefObject<HTMLDivElement>;
  disable?: boolean;
  gridItemsLength: number;
  maxWidth?: number;
  oneElementActive?: boolean;
  onlyOneActive?: boolean;
  querySelector?: string;
  rootMargin?: string;
  treshold?: number;
}

const DEFAULT_TRESHOLD = 0.95;

const useGridCards = ({
  containerRef,
  disable = false,
  gridItemsLength,
  maxWidth,
  onlyOneActive = false,
  querySelector = '.card',
  rootMargin = '0px',
  treshold = DEFAULT_TRESHOLD,
}: IUseGridCardsProps) => {
  const [cardsStatus, setCardsStatus] = useState<boolean[]>(new Array(gridItemsLength).fill(false));

  const { current: container } = containerRef;

  const obseverCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (maxWidth && window.innerWidth > maxWidth) return;

      const updatedCards: { id: number; value: boolean }[] = [];

      entries.forEach((entry) => {
        const id = +entry.target.id.split('-')[1];

        if (entry.isIntersecting && entry.intersectionRatio >= treshold)
          updatedCards.push({ id, value: true });
        else updatedCards.push({ id, value: false });
      });

      setCardsStatus((prev) => {
        const updated = [...prev];
        updatedCards.forEach(({ id, value }) => (updated[id] = value));

        return updated;
      });
    },
    [maxWidth, treshold],
  );

  const cleanup = useCallback(() => {
    const observer = new IntersectionObserver(obseverCallback, {
      threshold: [treshold],
      rootMargin,
    });

    const cards = container!.querySelectorAll(querySelector);

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });

      observer.disconnect();
    };
  }, [obseverCallback, querySelector, rootMargin, treshold, container]);

  useEffect(() => {
    if (disable) return;
    if (!container) return;

    const observerCleanup = cleanup();

    return observerCleanup;
  }, [cleanup, container, disable, gridItemsLength]);

  return useMemo(() => ({ cardsStatus, setCardsStatus }), [cardsStatus]);
};

export default useGridCards;
