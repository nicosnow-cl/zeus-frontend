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
  card: ICard;
  isHightlighted?: boolean;
  style?: any;
}

const VIP_MEDIA_HEIGHT = 600;
const PREMIUM_MEDIA_HEIGHT = 500;

const VipPremiumCard = ({ card, isHightlighted, style = {} }: IVipPremiumCardProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [showVideos, setShowVideos] = useState<boolean>(false);
  const { theme, router } = useContext(AppContext);

  const hasAction = isHightlighted ?? isHovering;
  const hasVideos = Boolean(card.medias.length);
  const cardSx = hasAction
    ? { borderTop: `6px solid ${theme?.palette.primary.main}`, transform: 'scale(1.02)' }
    : { borderTop: `6px solid ${theme?.palette.grey[900]}` };

  const handleClickCard = () => {
    const match = card.username !== '' ? card.username : card.escortId;

    router?.push(`/escort/${match}`);
  };

  if (card._id === '63c708aa23b1e5bca73344fb') {
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
          alt={`card-vip-${card.name}`}
          image={card.avatar}
          isHovering={hasAction}
          mediaHeight={card.type === 'VIP' ? VIP_MEDIA_HEIGHT : PREMIUM_MEDIA_HEIGHT}
          showVideos={showVideos}
          medias={card.medias}
        />

        <VipPremiumCardContent
          age={card.age}
          description={card.description}
          isHovering={hasAction}
          likes={card.likes}
          name={card.name.split(' ')[0]}
          nationality={card.nationality}
          services={card.services}
          type={card.type}
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
        location={card.location}
        price={card.price}
        rrss={card.rrss}
        type={card.type}
        hasPromo={card.hasPromo}
      />
    </Card>
  );
};

export default VipPremiumCard;
