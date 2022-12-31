import { Card, CardActionArea, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import IEscort from '../../../interfaces/states/interface.escort';
import PremiumCardContent from './PremiumCardContent';
import PremiumCardFooter from './PremiumCardFooter';
import PremiumCardMedia from './PremiumCardMedia';
import styles from './index.module.scss';

export interface IPremiumCardProps {
  data: IEscort;
}

const PremiumCard = ({ data }: IPremiumCardProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const router = useRouter();
  const theme = useTheme();

  const handleClickCard = () => {
    router.push(`/escort/${data.id}`);
  };

  const cardSx = () =>
    isHovering
      ? { borderTop: `6px solid ${theme.palette.primary.main}` }
      : {
          borderTop: `6px solid ${
            theme.palette.mode === 'light' ? theme.palette.grey[900] : 'white'
          }`,
        };

  return (
    <Card
      className={`h-100 d-flex fd-column ${styles.card}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      sx={cardSx()}
    >
      <CardActionArea onClick={handleClickCard}>
        <PremiumCardMedia
          alt={`card-vip-${data.name}`}
          imageSrc={data.img.hq}
          isHovering={isHovering}
          videoSrc={data.videos[0]}
        />

        <PremiumCardContent
          age={data.age}
          description={data.description}
          isHovering={isHovering}
          likes={data.likes}
          name={data.name.split(' ')[0]}
          nationality={data.nationality}
          services={data.services}
        />
      </CardActionArea>

      <PremiumCardFooter location={data.location} price={data.price} />
    </Card>
  );
};

export default PremiumCard;
