import { useRouter } from 'next/router';
import { Profiler, useRef } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import useTheme from '@mui/material/styles/useTheme';

import IEscort from '../../../interfaces/states/interface.escort';
import styles from './index.module.scss';
import VipPremiumCardContent from './VipPremiumCardContent';
import VipPremiumCardFooter from './VipPremiumCardFooter';
import VipPremiumCardMedia from './VipPremiumCardMediaV2';
import useCard from '../../../hooks/useCard';

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
  const { states, controls } = useCard({ cardRef, maxWidth: 645 });
  const router = useRouter();
  const theme = useTheme();

  const hasAction = states.isHovering || states.isHightlighted;

  const handleClickCard = () => {
    router.push(`/escort/${data.id}`);
  };

  const cardSx = () =>
    hasAction
      ? {
          borderTop: `6px solid ${theme.palette.primary.main}`,
          ...(style ?? {}),
          transform: 'scale(1.02)',
        }
      : {
          borderTop: `6px solid ${
            theme.palette.mode === 'light' ? theme.palette.grey[900] : 'white'
          }`,
          ...(style ?? {}),
        };

  return (
    <Profiler id={`VipCard-${data.id}`} onRender={handleRender}>
      <Card
        className={`h-100 d-flex fd-column ${styles.card}`}
        onMouseEnter={() => controls.setIsHovering(true)}
        onMouseLeave={() => controls.setIsHovering(false)}
        sx={cardSx()}
        ref={cardRef}
      >
        <CardActionArea onClick={handleClickCard}>
          <VipPremiumCardMedia
            alt={`card-vip-${data.name}`}
            image={data.img}
            isHovering={hasAction}
            videos={data.videos}
            mediaHeight={data.type === 'VIP' ? VIP_MEDIA_HEIGHT : PREMIUM_MEDIA_HEIGHT}
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
          />
        </CardActionArea>

        <VipPremiumCardFooter
          location={data.location}
          rrss={data.rrss}
          price={data.price}
          type={data.type}
        />
      </Card>
    </Profiler>
  );
};

export default VipPremiumCard;
