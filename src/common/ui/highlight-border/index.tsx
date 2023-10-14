import { DetailedHTMLProps, HTMLAttributes } from 'react';

import styles from './styles.module.scss';

export const HighLightBorder = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) => {
  const { className = '' } = props;

  return (
    <div
      {...props}
      className={`absolute h-full w-full scale-[1.005] ${styles.highlightBorder} ${className}`}
    />
  );
};
