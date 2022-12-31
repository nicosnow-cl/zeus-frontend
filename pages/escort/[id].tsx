import type { ReactElement } from 'react';

import EscortSection from '../../components/Escort/EscortSection';
import ContentContainer from '../../components/UIElements/ContentContainer';
import MainContainer from '../../components/UIElements/MainContainer';
import SimpleNavbar from '../../components/UIElements/SimpleNavbar';
import ViewLadyImage from '../../components/UIElements/ViewLadyImage';
import obtainProfileGet from '../../services/escort/obtainProfileGet';

const EscortPage = ({ data }: any) => {
  return (
    <MainContainer>
      <EscortSection profile={data} />

      <ViewLadyImage />
    </MainContainer>
  );
};

export async function getServerSideProps({ query }: any) {
  const { id } = query;

  const profile = await obtainProfileGet(+id);

  return { props: { data: profile || null } };
}

EscortPage.getLayout = (page: ReactElement) => (
  <MainContainer>
    <SimpleNavbar />

    <ContentContainer>{page}</ContentContainer>
  </MainContainer>
);

export default EscortPage;
