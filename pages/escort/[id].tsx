import type { ReactElement } from 'react';

import profiles from '../../dummy/profiles';

export const getServerSideProps = async () => {
  return { props: { data: profiles[0] } };
};

const EscortPage = () => {
  return <h1>asdasdas</h1>;
};

EscortPage.getLayout = (page: ReactElement) => page;

export default EscortPage;
