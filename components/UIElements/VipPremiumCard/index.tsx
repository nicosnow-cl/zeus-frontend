import { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';

import { AppContext } from '../../../pages/_app';
import ICard from '../../../interfaces/states/interface.card';
import styles from './index.module.scss';
import VideoCountdownHandler from './VideoCountdownHandler';
import VipPremiumCardContent from './VipPremiumCardContent';
import VipPremiumCardFooter from './VipPremiumCardFooter';
import VipPremiumCardMedia from './VipPremiumCardMediaV2';

export interface IVipPremiumCardProps {
  data: ICard;
  style?: any;
  containerRef?: any;
  isHightlighted?: boolean;
}

const VIP_MEDIA_HEIGHT = 600;
const PREMIUM_MEDIA_HEIGHT = 500;

const VipPremiumCard = ({ data, style, isHightlighted }: IVipPremiumCardProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [showVideos, setShowVideos] = useState<boolean>(false);
  const { theme, router } = useContext(AppContext);

  const hasAction = isHightlighted ?? isHovering;
  const hasVideos = Boolean(data.videos.length);

  const cardSx = () =>
    hasAction
      ? {
          borderTop: `6px solid ${theme?.palette.primary.main}`,
          ...(style ?? {}),
          transform: 'scale(1.02)',
        }
      : {
          borderTop: `6px solid ${
            theme?.palette.mode === 'light' ? theme?.palette.grey[900] : 'white'
          }`,
          ...(style ?? {}),
        };

  const handleClickCard = () => {
    router?.push(`/escort/${data.id}`);
  };

  return (
    <Card
      className={`h-100 d-flex fd-column ${styles.card}`}
      onMouseEnter={() => isHightlighted === undefined && setIsHovering(true)}
      onMouseLeave={() => isHightlighted === undefined && setIsHovering(false)}
      sx={cardSx()}
    >
      <CardActionArea onClick={handleClickCard}>
        <VipPremiumCardMedia
          alt={`card-vip-${data.name}`}
          image={data.img}
          isHovering={hasAction}
          mediaHeight={data.type === 'VIP' ? VIP_MEDIA_HEIGHT : PREMIUM_MEDIA_HEIGHT}
          showVideos={showVideos}
          videos={data.videos}
        />

        <VipPremiumCardContent
          age={data.age}
          description={data.description}
          isHovering={hasAction}
          likes={data.likes}
          name={data.name.split(' ')[0]}
          nationality={data.nationality}
          services={data.services}
          type={data.type}
          timeLapsedIcon={
            hasVideos ? (
              <VideoCountdownHandler
                hasVideos={hasVideos}
                startCountdown={hasAction}
                onCountdownEnd={() => setShowVideos(true)}
                onCountdownInit={() => setShowVideos(false)}
              />
            ) : undefined
          }
        />
      </CardActionArea>

      <VipPremiumCardFooter
        location={data.location}
        price={data.price}
        rrss={data.rrss}
        type={data.type}
      />
    </Card>
  );
};

export default VipPremiumCard;
