import { useContext } from 'react';

import { AppContext } from '../../../pages/_app';
import SmallButtonFilters from './SmallButtonFilters';
import NormalButtonFilters from './NormalButtonFilters';

const PageFilters = () => {
  const { device } = useContext(AppContext);

  if (device?.type === 'mobile') return <SmallButtonFilters />;

  return <NormalButtonFilters />;
};

export default PageFilters;
