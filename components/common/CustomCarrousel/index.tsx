import 'react-multi-carousel/lib/styles.css';
import Carousel, { ArrowProps, ResponsiveType } from 'react-multi-carousel';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export interface ICustomCarrouselProps {
  elements?: JSX.Element[];
  infinite?: boolean;
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
  infinite = false,
  responsive = DEFAULT_RESPONSIVE,
}: ICustomCarrouselProps) => {
  return (
    <Carousel
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      infinite={infinite}
      responsive={responsive}
    >
      {elements.map((element) => (
        <>{element}</>
      ))}
    </Carousel>
  );
};

export default CustomCarrousel;
