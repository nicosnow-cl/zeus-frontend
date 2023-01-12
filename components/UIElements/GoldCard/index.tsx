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
  style?: any;
}

const GoldCard = ({ data, style = {} }: IGoldCardProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const { theme, router } = useContext(AppContext);

  const cardSx = isHovering
    ? { borderTop: `6px solid ${theme?.palette.primary.main}`, transform: 'scale(1.02)' }
    : { borderTop: `6px solid ${theme?.palette.grey[900]}` };

  const handleClickCard = () => {
    router?.push(`/escort/${data.id}`);
  };

  return (
    <Card
      className={`h-100 d-flex fd-column ${styles.card}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      sx={{ ...cardSx, ...style }}
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
