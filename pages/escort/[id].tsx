import type { ReactElement } from 'react';

import { obtainProfileGetServerless } from '../api/obtainProfileServerLess';
import EscortSection from '../../components/Escort/EscortSection';
import ContentContainer from '../../components/UIElements/ContentContainer';
import MainContainer from '../../components/UIElements/MainContainer';
import SimpleNavbar from '../../components/UIElements/SimpleNavbar';
import ViewLadyImage from '../../components/UIElements/ViewLadyImage';
import obtainProfileGet from '../../services/escort/obtainProfileGet';
import profiles from '../../dummy/profiles';

const EscortPage = ({ data }: any) => {
  return <EscortSection profile={data} />;
};

export async function getServerSideProps({ req, res, query }: any) {
  const { id } = query;

  const profile = profiles.find((profile: any) => profile.id === +id);

  return { props: { data: profile || null } };
}

EscortPage.getLayout = (page: ReactElement) => (
  <MainContainer>
    <SimpleNavbar />

    <ContentContainer>{page}</ContentContainer>
  </MainContainer>
);

export default EscortPage;
