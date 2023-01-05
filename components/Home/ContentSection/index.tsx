import { useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';

import IEscort from '../../../interfaces/states/interface.escort';
import LoadingHome from '../LoadingHome';
import NoCardsFound from '../NoCardsFound';
// import CardsSection from '../CardsSection';
import CardsSection from '../CardsSectionV2';

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

  // return (
  //   <>
  //     {vip.length > 0 && <CardsSection cards={vip} type="VIP" />}
  //     {premium.length > 0 && <CardsSection cards={premium} type="PREMIUM" />}
  //     {gold.length > 0 && <CardsSection cards={gold} type="GOLD" />}
  //   </>
  // );
};

export default ContentSection;
