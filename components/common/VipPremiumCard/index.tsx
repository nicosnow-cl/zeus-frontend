import { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';

import { AppContext } from '../../../pages/_app';
import ICard from '../../../interfaces/states/interface.card';
import styles from './index.module.scss';
import VideoCountdownHandler from './VideoCountdownHandler';
import VipPremiumCardContent from './VipPremiumCardContent';
import VipPremiumCardFooter from './VipPremiumCardFooter';
import VipPremiumCardMedia from './VipPremiumCardMedia';

export interface IVipPremiumCardProps {
  data: ICard;
  isHightlighted?: boolean;
  style?: any;
}

const VIP_MEDIA_HEIGHT = 600;
const PREMIUM_MEDIA_HEIGHT = 500;

const VipPremiumCard = ({ data, isHightlighted, style = {} }: IVipPremiumCardProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [showVideos, setShowVideos] = useState<boolean>(false);
  const { theme, router } = useContext(AppContext);

  const hasAction = isHightlighted ?? isHovering;
  const hasVideos = Boolean(data.videos.length);
  const cardSx = hasAction
    ? { borderTop: `6px solid ${theme?.palette.primary.main}`, transform: 'scale(1.02)' }
    : { borderTop: `6px solid ${theme?.palette.grey[900]}` };

  const handleClickCard = () => {
    router?.push(`/escort/${data.escortId}`);
  };

  if (data._id === '63c708aa23b1e5bca73344fb') {
    console.count('VipPremiumCard render');
    // console.log({ image: data.img });
  }

  return (
    <Card
      className={`h-100 d-flex fd-column ${styles.card}`}
      onMouseEnter={() => isHightlighted === undefined && setIsHovering(true)}
      onMouseLeave={() => isHightlighted === undefined && setIsHovering(false)}
      sx={{ ...cardSx, ...style }}
    >
      <CardActionArea onClick={handleClickCard}>
        <VipPremiumCardMedia
          alt={`card-vip-${data.name}`}
          image={data.avatar}
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
                onCountdownEnd={() => !showVideos && setShowVideos(true)}
                onCountdownInit={() => showVideos && setShowVideos(false)}
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
        hasPromo={data.hasPromo}
      />
    </Card>
  );
};

export default VipPremiumCard;
