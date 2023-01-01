import type { ReactElement } from 'react';

// import SimpleNavbar from '../../components/UIElements/SimpleNavbar';
import ContentContainer from '../../components/UIElements/ContentContainer';
import EscortSection from '../../components/Escort/EscortSection';
import MainContainer from '../../components/UIElements/MainContainer';
// import Navbar from '../../components/UIElements/Navbar';
import obtainProfileGet from '../../services/escort/obtainProfileGet';

export const getServerSideProps = async ({ query }: any) => {
  const { id } = query;

  const profile = await obtainProfileGet(+id);

  return { props: { data: profile || null } };
};

const EscortPage = ({ data }: any) => {
  return <EscortSection profile={data} />;
};

EscortPage.getLayout = (page: ReactElement) => (
  <MainContainer>
    {/* <Navbar /> */}

    <ContentContainer>{page}</ContentContainer>
  </MainContainer>
);

export default EscortPage;
