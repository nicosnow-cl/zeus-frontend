import type { ReactElement } from 'react';

import EscortSection from '../../components/Escort/EscortSection';
import ContentContainer from '../../components/UIElements/ContentContainer';
import MainContainer from '../../components/UIElements/MainContainer';
import SimpleNavbar from '../../components/UIElements/SimpleNavbar';
import profiles from '../../dummy/profiles';

export const getServerSideProps = async ({ req, res, query }: any) => {
  const { id } = query;

  const profile = profiles.find((profile: any) => profile.id === +id);

  return { props: { data: profile || null } };
};

const EscortPage = ({ data }: any) => {
  return <EscortSection profile={data} />;
};

EscortPage.getLayout = (page: ReactElement) => (
  <MainContainer>
    <SimpleNavbar />

    <ContentContainer>{page}</ContentContainer>
  </MainContainer>
);

export default EscortPage;
