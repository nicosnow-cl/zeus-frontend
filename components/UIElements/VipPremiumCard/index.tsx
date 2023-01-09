import { Profiler, useContext, useRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';

import { AppContext } from '../../../pages/_app';
import IEscort from '../../../interfaces/states/interface.escort';
import styles from './index.module.scss';
import useCard from '../../../hooks/useCard';
import VideoCountdownHandler from './VideoCountdownHandler';
import VipPremiumCardContent from './VipPremiumCardContent';
import VipPremiumCardFooter from './VipPremiumCardFooter';
import VipPremiumCardMedia from './VipPremiumCardMediaV2';

export interface IVipPremiumCardProps {
  data: IEscort;
  style?: any;
  containerRef?: any;
}

const handleRender = (id: string, phase: string, duration: number) => {
  if (id === 'VipCard-1') console.log(`Componente ${id} se renderizó en ${phase} en ${duration}ms`);
};

const VIP_MEDIA_HEIGHT = 600;
const PREMIUM_MEDIA_HEIGHT = 500;

const VipPremiumCard = ({ data, style }: IVipPremiumCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [showVideos, setShowVideos] = useState<boolean>(false);
  const { states, controls } = useCard({ cardRef, maxWidth: 633 });
  const { theme, router } = useContext(AppContext);

  const hasAction = states.isHovering || states.isHightlighted;
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

  const onCountdownEnd = () => {
    setShowVideos(true);
  };

  const onCountdownInit = () => {
    setShowVideos(false);
  };

  return (
    <Profiler id={`VipCard-${data.id}`} onRender={handleRender}>
      <Card
        ref={cardRef}
        className={`h-100 d-flex fd-column ${styles.card}`}
        onMouseEnter={() => controls.setIsHovering(true)}
        onMouseLeave={() => controls.setIsHovering(false)}
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
                  onCountdownEnd={onCountdownEnd}
                  onCountdownInit={onCountdownInit}
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
    </Profiler>
  );
};

export default VipPremiumCard;
