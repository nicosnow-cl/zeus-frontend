import { RefObject, useCallback, useEffect, useMemo, useState } from 'react';

export interface IUseGridCardsProps {
  containerRef: RefObject<HTMLDivElement>;
  disable?: boolean;
  gridItems: any[] | readonly any[];
  maxWidth?: number;
  oneElementActive?: boolean;
  querySelector?: string;
  rootMargin?: string;
  startingValue?: boolean;
  treshold?: number;
}

const DEFAULT_TRESHOLD = 0.95;

const useGridCards = ({
  containerRef,
  disable = false,
  gridItems,
  maxWidth,
  querySelector = '.card',
  rootMargin = '0px',
  startingValue = false,
  treshold = DEFAULT_TRESHOLD,
}: IUseGridCardsProps) => {
  const [cardsStatus, setCardsStatus] = useState<boolean[]>(
    new Array(gridItems.length).fill(startingValue),
  );

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

      setCardsStatus((prev: any[]) => {
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
  }, [cleanup, container, disable, gridItems]);

  return { cardsStatus, setCardsStatus };
};

export default useGridCards;
