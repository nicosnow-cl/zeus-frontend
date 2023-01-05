import { useRouter } from 'next/router';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import useTheme from '@mui/material/styles/useTheme';

import GoldCardContent from './GoldCardContent';
import GoldCardMedia from './GoldCardMedia';
import IEscort from '../../../interfaces/states/interface.escort';
import styles from './index.module.scss';

export interface IGoldCardProps {
  data: IEscort;
}

const GoldCard = ({ data }: IGoldCardProps) => {
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
        <GoldCardMedia alt={`card-vip-${data.name}`} imageSrc={data.img.hq} />

        <GoldCardContent
          age={data.age}
          likes={data.likes}
          name={data.name.split(' ')[0]}
          nationality={data.nationality}
          price={data.price}
        />
      </CardActionArea>
    </Card>
  );
};

export default GoldCard;
