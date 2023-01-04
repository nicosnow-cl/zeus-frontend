import { useRouter } from 'next/router';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import useTheme from '@mui/material/styles/useTheme';

import IEscort from '../../../interfaces/states/interface.escort';
import styles from './index.module.scss';
import VipCardContent from './VipCardContent';
import VipCardFooter from './VipCardFooter';
import VipCardMedia from './VipCardMedia';

export interface IVipCardProps {
  data: IEscort;
  style?: any;
  ref?: any;
}

const VipCard = ({ data, style, ref }: IVipCardProps) => {
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

  return (
    <Card
      className={`h-100 d-flex fd-column ${styles.card}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      sx={cardSx()}
      ref={ref}
    >
      <CardActionArea onClick={handleClickCard}>
        <VipCardMedia
          alt={`card-vip-${data.name}`}
          imageSrc={data.img.hq}
          isHovering={isHovering}
          videosSrc={data.videos}
        />

        <VipCardContent
          age={data.age}
          description={data.description}
          isHovering={isHovering}
          likes={data.likes}
          name={data.name.split(' ')[0]}
          nationality={data.nationality}
          services={data.services}
        />
      </CardActionArea>

      <VipCardFooter location={data.location} rrss={data.rrss} price={data.price} />
    </Card>
  );
};

export default VipCard;
