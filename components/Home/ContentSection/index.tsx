import { useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';
import CardsSection from '../CardsSection';
import IEscort from '../../../interfaces/states/interface.escort';
import LoadingHome from '../LoadingHome';
import NoCardsFound from '../NoCardsFound';

export interface IContentSectionProps {
  vip: IEscort[];
  premium: IEscort[];
  gold: IEscort[];
}

const ContentSection = ({ vip, premium, gold }: IContentSectionProps) => {
  const isLoadingHome = useSelector((state: RootState): boolean => state.ui.isLoadingHome);

  if (isLoadingHome) return <LoadingHome />;
  if (vip.length === 0 && premium.length === 0 && gold.length === 0) return <NoCardsFound />;

  return <CardsSection cards={[...vip, ...premium, ...gold]} />;
};

export default ContentSection;
