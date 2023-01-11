import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';

import { AppContext } from '../../../pages/_app';
import GoldCardContent from './GoldCardContent';
import GoldCardMedia from './GoldCardMedia';
import ICard from '../../../interfaces/states/interface.card';
import styles from './index.module.scss';

export interface IGoldCardProps {
  data: ICard;
}

const GoldCard = ({ data }: IGoldCardProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const { theme } = useContext(AppContext);
  const router = useRouter();

  const handleClickCard = () => {
    router.push(`/escort/${data.id}`);
  };

  const cardSx = () =>
    isHovering
      ? { borderTop: `6px solid ${theme?.palette.primary.main}` }
      : {
          borderTop: `6px solid ${
            theme?.palette.mode === 'light' ? theme?.palette.grey[900] : 'white'
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
        <GoldCardMedia alt={`card-gold-${data.name}`} image={data.img} />

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
