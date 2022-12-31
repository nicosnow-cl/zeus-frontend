import 'react-multi-carousel/lib/styles.css';
import { IconButton } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import Carousel, { ArrowProps, ResponsiveType } from 'react-multi-carousel';

import styles from './index.module.scss';

export interface ICustomCarrouselProps {
  elements?: JSX.Element[];
  responsive?: ResponsiveType;
}

const CustomRightArrow = ({ onClick, ...rest }: ArrowProps) => {
  return (
    <IconButton
      className={`mr-2`}
      style={{ position: 'absolute', right: 0 }}
      onClick={onClick}
      size="small"
    >
      <KeyboardArrowRight />
    </IconButton>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }: ArrowProps) => {
  return (
    <IconButton
      className={`ml-2`}
      style={{ position: 'absolute', left: 0 }}
      onClick={onClick}
      size="small"
    >
      <KeyboardArrowLeft />
    </IconButton>
  );
};

const DEFAULT_RESPONSIVE: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomCarrousel = ({
  elements = [],
  responsive = DEFAULT_RESPONSIVE,
}: ICustomCarrouselProps) => {
  return (
    <Carousel
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      infinite
      keyBoardControl
      responsive={responsive}
    >
      {elements.map((element, idx) => {
        return (
          <div key={idx} className={styles.carouselItem}>
            {element}
          </div>
        );
      })}
    </Carousel>
  );
};

export default CustomCarrousel;
