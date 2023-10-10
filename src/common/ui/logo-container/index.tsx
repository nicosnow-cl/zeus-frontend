import { Box } from '@radix-ui/themes';

import styles from './styles.module.scss';

export interface IProps {
  children?: React.ReactNode;
}

export const LogoContainer = ({ children }: IProps) => {
  return (
    <Box
      className={`pr-4 relative overflow-hidden flex flex-column items-center rounded-r-5 bg-woodsmoke-50/5 backdrop-blur-md backdrop-saturate-150 ${styles.logo}`}
      style={{ borderBottomRightRadius: '0' }}
    >
      {children}

      <span
        className={`bg-crimson-9 backdrop-blur-md backdrop-saturate-150 transition-[width,height] duration-700 ease-in-out ${styles.aware}`}
      />
    </Box>
  );
};
