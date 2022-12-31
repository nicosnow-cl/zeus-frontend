import { Card, CardActionArea, CardContent, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { AppDispatch } from '../../../redux/store';
import { uiActions } from '../../../redux/reducers/ui';
import checkIfIsServer from '../../../utils/checkIfIsServer';
import getThemeMode from '../../../utils/getThemeMode';
import IEscort from '../../../interfaces/states/interface.escort';
import LadyCardContent from './LadyCardContent';
import LadyCardFooter from './LadyCardFooter';
import LadyCardMedia from './LadyCardMedia';
import styles from './index.module.scss';

export interface ILadyCardProps {
  data: IEscort;
  type?: 'VIP' | 'PREMIUM' | 'GOLD';
  displayMedia?: boolean;
  handleHoverCard?: (isHovered: boolean) => void;
}

const DEBOUNCE_TIME = 1500;
const VIP_MEDIA_HEIGHT = 600;
const PREMIUM_MEDIA_HEIGHT = 500;
const GOLD_MEDIA_HEIGHT = 400;

const isSever = checkIfIsServer();

const LadyCard = ({ data, type = 'GOLD', displayMedia, handleHoverCard }: ILadyCardProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();

  const mode = isSever ? 'light' : getThemeMode();

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    if (displayMedia || isHovering) {
      timeout = setTimeout(() => {
        setShowVideo(true);
      }, DEBOUNCE_TIME);
      setIsHovering(true);
    } else {
      setShowVideo(false);
      setIsHovering(false);
    }

    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [displayMedia, isHovering]);

  const cardSx = () => {
    if (isHovering)
      return {
        borderTop: `6px solid ${theme.palette.primary.main}`,
      };

    return {
      borderTop: `6px solid ${mode === 'light' ? theme.palette.grey[900] : 'white'}`,
    };
  };

  const getMediaHeight = () => {
    switch (type) {
      case 'VIP':
        return VIP_MEDIA_HEIGHT;
      case 'PREMIUM':
        return PREMIUM_MEDIA_HEIGHT;
      default:
        return GOLD_MEDIA_HEIGHT;
    }
  };

  const handleOnClickCard = () => {
    dispatch(uiActions.handleToggleLadyProfile(true));
  };

  const extraProps = () => {
    if (handleHoverCard) {
      return {
        onMouseEnter: () => handleHoverCard(true),
        onMouseLeave: () => handleHoverCard(false),
      };
    } else {
      return {
        onMouseEnter: () => setIsHovering(true),
        onMouseLeave: () => setIsHovering(false),
      };
    }
  };

  return (
    <Card className={`h-100 d-flex fd-column ${styles.card}`} sx={cardSx()} {...extraProps()}>
      <CardContent className={`${styles.cardContent}`}>
        <Link href={`/escort/1`}>
          <CardActionArea
            className={`${styles.cardActionArea}`}
            // onClick={handleOnClickCard}
          >
            {
              // Card Image and Video
              {
                VIP: (
                  <LadyCardMedia
                    alt={`${data.name}`}
                    imageSrc={data.img}
                    mediaHeight={getMediaHeight()}
                    showVideo={showVideo}
                    videosSrc={data.videos}
                  />
                ),
                PREMIUM: (
                  <LadyCardMedia
                    alt={`${data.name}`}
                    imageSrc={data.img}
                    mediaHeight={getMediaHeight()}
                    showVideo={showVideo}
                    videosSrc={data.videos}
                  />
                ),
                GOLD: (
                  <LadyCardMedia
                    alt={`${data.name}`}
                    imageSrc={data.img}
                    mediaHeight={getMediaHeight()}
                  />
                ),
              }[type]
            }

            {
              // Card content (name, description, services, etc)
              {
                VIP: (
                  <LadyCardContent
                    age={data.age}
                    description={data.description}
                    isHovering={isHovering}
                    likes={data.likes}
                    name={data.name.split(' ')[0]}
                    nationality={data.nationality}
                    services={data.services}
                    type={type}
                  />
                ),
                PREMIUM: (
                  <LadyCardContent
                    age={data.age}
                    description={data.description}
                    isHovering={isHovering}
                    likes={data.likes}
                    name={data.name.split(' ')[0]}
                    nationality={data.nationality}
                    services={data.services}
                    type={type}
                  />
                ),
                GOLD: (
                  <LadyCardContent
                    age={data.age}
                    name={data.name.split(' ')[0]}
                    price={data.price}
                    nationality={data.nationality}
                    likes={data.likes}
                  />
                ),
              }[type]
            }
          </CardActionArea>
        </Link>

        {
          // Footer
          {
            VIP: <LadyCardFooter location={data.location} rrss={data.rrss} price={data.price} />,
            PREMIUM: <LadyCardFooter location={data.location} price={data.price} />,
            GOLD: <></>,
          }[type]
        }
      </CardContent>
    </Card>
  );
};

export default LadyCard;
