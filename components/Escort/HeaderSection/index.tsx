import { useContext } from 'react';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

import { AppContext } from '../../../pages/_app';
import EscortType from '../../../types/type.escort';
import IImage from '../../../interfaces/objects/interface.image';
import StoryAvatar from '../../UIElements/StoryAvatar/index';

export interface IHeaderSectionProps {
  age: number;
  avatar: IImage;
  bannerImg: string;
  name: string;
  type: EscortType;
}

const HeaderSection = ({ age, avatar, bannerImg, name, type }: IHeaderSectionProps) => {
  const { theme } = useContext(AppContext);

  const backgroundColor = theme?.palette.grey[200];
  const color = theme?.palette.getContrastText(backgroundColor);

  return (
    <>
      <div className={`w-100 d-flex fd-column jc-between relative`} style={{ height: 300 }}>
        <Image
          alt={`banner-img-${name}`}
          blurDataURL={
            'https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg'
          }
          fill
          placeholder="blur"
          quality={50}
          src={bannerImg}
          style={{ objectFit: 'cover', borderRadius: '20px 20px 0 0' }}
        />
      </div>

      <Grid container style={{ backgroundColor }}>
        <Grid
          className={`d-flex jc-center relative`}
          item
          xs={12}
          sm={5}
          md={4}
          sx={{ height: 110 }}
        >
          <div
            style={{
              position: 'absolute',
              width: 200,
              height: 200,
              bottom: 0,
              margin: '0 auto',
            }}
          >
            <StoryAvatar size={200} image={avatar} />
          </div>
        </Grid>

        <Grid className={`p-2 d-flex jc-evenly ai-center col-gap-3`} item xs={12} sm={7} md={8}>
          <Typography variant="h2" style={{ color }}>
            {name}
            <Typography variant="h6">{age} años</Typography>
          </Typography>

          <Divider orientation="vertical" sx={{ maxHeight: '65%' }} />

          <Typography className={`ml-2`} variant="h6" style={{ color }}>
            Acompañante {type}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderSection;
