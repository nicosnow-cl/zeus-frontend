import type { ReactElement } from 'react';

import EscortSection from '../../components/Escort/EscortSection';
import ContentContainer from '../../components/UIElements/ContentContainer';
import MainContainer from '../../components/UIElements/MainContainer';
import SimpleNavbar from '../../components/UIElements/SimpleNavbar';
import obtainProfileGet from '../../services/escort/obtainProfileGet';

export const getServerSideProps = async ({ query }: any) => {
  const { id } = query;

  const profile = await obtainProfileGet(+id);

  return { props: { data: profile || null } };
};

const EscortPage = ({ data }: any) => {
  return <EscortSection profile={data} />;
};

EscortPage.getLayout = (page: ReactElement) => page;

export default EscortPage;
