import { Box } from '@mui/system';
import {
  // Grid,
  useTheme,
} from '@mui/material';

import ContactSection from '../ContactSection/index';
import DescriptionSection from '../DesciptionSection';
import HeaderSection from '../HeaderSection';
// import InformationSecion from '../InformationSection';
import IProfile from '../../../interfaces/states/interface.profile';
// import MediaSection from '../MediaSection';

export interface IEscortSectionProps {
  profile: IProfile;
}

const EscortSection = ({ profile }: IEscortSectionProps) => {
  const theme = useTheme();

  return (
    <div style={{ margin: '0 auto' }}>
      <Box
        className={`mt-5 mb-5`}
        sx={{
          backgroundColor: theme.palette.grey[100],
          borderRadius: 5,
        }}
      >
        <HeaderSection
          age={profile.age}
          avatarImg={profile.avatarImg.hq}
          bannerImg={profile.bannerImg}
          name={profile.name}
          type={profile.type}
        />

        <DescriptionSection
          appareance={profile.appareance}
          description={profile.description}
          nacionality={profile.nationality}
        />

        <ContactSection
          location={profile.location}
          phoneNumber={profile.phoneNumber}
          price={profile.price}
          rrss={profile.rrss}
        />

        {/* <Grid container>
          <Grid item xs={12} xl={3}>
            <InformationSecion schedule={profile.schedule} services={profile.services} />
          </Grid>
          <Grid item xs={12} xl={9}>
            <MediaSection images={profile.images} videos={profile.videos} />
          </Grid>
        </Grid> */}
      </Box>
    </div>
  );
};

export default EscortSection;
