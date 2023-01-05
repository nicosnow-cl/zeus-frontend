import { useRouter } from 'next/router';
import { useState, Profiler } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import useTheme from '@mui/material/styles/useTheme';

import IEscort from '../../../interfaces/states/interface.escort';
import styles from './index.module.scss';
import VipPremiumCardContent from './VipPremiumCardContent';
import VipPremiumCardFooter from './VipPremiumCardFooter';
import VipPremiumCardMedia from './VipPremiumCardMediaV2';

export interface IVipPremiumCardProps {
  data: IEscort;
  style?: any;
  ref?: any;
}

interface ICardContext {
  data: IEscort | null;
  isHovering: boolean;
  router: ReturnType<typeof useRouter> | null;
  theme: ReturnType<typeof useTheme> | null;
}

// const DEFAULT_CARD_CONTEXT: ICardContext = {
//   isHovering: false,
//   data: null,
//   theme: null,
//   router: null,
// };

// export const CardContext = createContext(DEFAULT_CARD_CONTEXT);

const handleRender = (id: string, phase: string, duration: number) => {
  if (id === 'VipCard-1') console.log(`Componente ${id} se renderizó en ${phase} en ${duration}ms`);
};

const VIP_MEDIA_HEIGHT = 600;
const PREMIUM_MEDIA_HEIGHT = 500;

const VipPremiumCard = ({ data, style, ref }: IVipPremiumCardProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const router = useRouter();
  const theme = useTheme();

  const handleClickCard = () => {
    router.push(`/escort/${data.id}`);
  };

  const cardSx = () =>
    isHovering
      ? { borderTop: `6px solid ${theme.palette.primary.main}`, ...(style ?? {}) }
      : {
          borderTop: `6px solid ${
            theme.palette.mode === 'light' ? theme.palette.grey[900] : 'white'
          }`,
          ...(style ?? {}),
        };

  // const providerValue = {
  //   data,
  //   isHovering,
  //   router,
  //   theme,
  // };

  return (
    <Profiler id={`VipCard-${data.id}`} onRender={handleRender}>
      <Card
        className={`h-100 d-flex fd-column ${styles.card}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        sx={cardSx()}
        ref={ref}
      >
        {/* <CardContext.Provider value={providerValue}> */}
        <CardActionArea onClick={handleClickCard}>
          <VipPremiumCardMedia
            alt={`card-vip-${data.name}`}
            image={data.img}
            isHovering={isHovering}
            videos={data.videos}
            mediaHeight={data.type === 'VIP' ? VIP_MEDIA_HEIGHT : PREMIUM_MEDIA_HEIGHT}
          />

          <VipPremiumCardContent
            age={data.age}
            description={data.description}
            isHovering={isHovering}
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
        {/* </CardContext.Provider> */}
      </Card>
    </Profiler>
  );
};

export default VipPremiumCard;
