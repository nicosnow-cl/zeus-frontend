import { useContext } from 'react';
import Box from '@mui/system/Box';
import dynamic from 'next/dynamic';
import Grid from '@mui/material/Grid';

import { AppContext } from '../../../pages/_app';
import ContactSection from '../ContactSection/index';
import DescriptionSection from '../DesciptionSection';
import HeaderSection from '../HeaderSection';
import InformationSecion from '../InformationSection';
import IProfile from '../../../interfaces/states/interface.profile';

const LazyMediaSection = dynamic(() => import('../MediaSection'), { ssr: false });

export interface IEscortSectionProps {
  profile: IProfile;
}

const EscortSection = ({ profile }: IEscortSectionProps) => {
  const { theme } = useContext(AppContext);

  const backgroundColor = theme?.palette.grey[100];
  const color = theme?.palette.getContrastText(backgroundColor);

  console.count('EscortSection render');

  return (
    <Box
      className={`mt-5 mb-5`}
      sx={{
        backgroundColor,
        borderRadius: 5,
      }}
    >
      <HeaderSection
        age={profile.age}
        avatar={profile.avatar}
        banner={profile.banner}
        id={`${profile._id}`}
        name={profile.name}
        type={profile.type}
      />

      <DescriptionSection
        breast={profile.breast}
        color={color}
        contexture={profile.contexture}
        description={profile.description}
        eyeColor={profile.eyeColor}
        hairColor={profile.hairColor}
        height={profile.height}
        languages={profile.languages}
        nacionality={profile.nationality}
        rear={profile.rear}
        size={profile.size}
        skin={profile.skin}
        waxing={profile.waxing}
        weight={profile.weight}
      />

      <ContactSection
        hasPromo={profile.hasPromo}
        location={profile.location}
        phoneNumber={profile.phoneNumber}
        price={profile.price}
        rrss={profile.rrss}
      />

      <Grid container>
        <Grid item xs={12} xl={3}>
          <InformationSecion schedule={profile.schedule} services={profile.services} />
        </Grid>
        <Grid item xs={12} xl={9}>
          <LazyMediaSection images={profile.images} videos={profile.videos} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EscortSection;
