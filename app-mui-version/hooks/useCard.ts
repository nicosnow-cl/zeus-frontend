import { RefObject, useEffect, useState } from 'react';

export interface IUseCard {
  cardRef?: RefObject<HTMLDivElement>;
  containerRef?: RefObject<HTMLDivElement>;
  maxWidth?: number;
  oneElementActive?: boolean;
  rootMargin?: string;
  treshold?: number;
}

const DEFAULT_TRESHOLD = 0.95;

const useCard = ({
  cardRef,
  containerRef,
  maxWidth,
  oneElementActive = true,
  rootMargin = '0px',
  treshold = DEFAULT_TRESHOLD,
}: IUseCard) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isHightlighted, setIsHightlighted] = useState<boolean>(false);

  useEffect(() => {
    if (!maxWidth) return;
    if (!cardRef?.current) return;

    const element = cardRef.current;
    const container = containerRef?.current || null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (window.innerWidth > maxWidth) return;

        setIsHightlighted(entry.isIntersecting && entry.intersectionRatio >= treshold);
      },
      { root: container, rootMargin: rootMargin, threshold: [treshold] },
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [cardRef, containerRef, treshold, maxWidth, rootMargin]);

  const conditionalSetIsHovering = (value: boolean) => {
    if (maxWidth && window.innerWidth <= maxWidth && !isHightlighted) return;

    setIsHovering(value);
  };

  return {
    states: { isHovering, isHightlighted },
    controls: {
      setIsHovering: oneElementActive ? conditionalSetIsHovering : setIsHovering,
      setIsHightlighted,
    },
  } as const;
};

export default useCard;
