import type { ReactElement } from 'react';

import EscortSection from '../../components/Escort/EscortSection';
import profiles from '../../dummy/profiles';

export const getServerSideProps = async () => {
  return { props: { data: profiles[0] } };
};

const EscortPage = ({ data }: any) => {
  return <EscortSection profile={data} />;
};

EscortPage.getLayout = (page: ReactElement) => page;

export default EscortPage;
