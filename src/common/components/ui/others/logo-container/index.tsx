import { Box } from '@radix-ui/themes'

import styles from './styles.module.scss'

export interface IProps {
  children?: React.ReactNode
}

export const LogoContainer = ({ children }: IProps) => {
  return (
    <Box
      className={`flex-column relative flex items-center overflow-hidden rounded-r-5 bg-woodsmoke-50/5 pr-4 backdrop-blur-md backdrop-saturate-150 ${styles.logo}`}
      style={{ borderBottomRightRadius: '0' }}
    >
      {children}

      <span
        className={`bg-crimson-9 backdrop-blur-md backdrop-saturate-150 transition-[width,height] duration-700 ease-in-out ${styles.aware}`}
      />
    </Box>
  )
}
