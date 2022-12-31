import { useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';
import CardsSection from '../CardsSection';
import IEscort from '../../../interfaces/states/interface.escort';
import LoadingHome from '../LoadingHome';

export interface IContentSectionProps {
  vip: IEscort[];
  premium: IEscort[];
  gold: IEscort[];
}

const ContentSection = ({ vip, premium, gold }: IContentSectionProps) => {
  const isLoadingHome = useSelector((state: RootState): boolean => state.ui.isLoadingHome);

  return (
    <>
      {!isLoadingHome ? (
        <>
          {vip.length && <CardsSection cards={vip} type="VIP" />}
          {premium.length && <CardsSection cards={premium} type="PREMIUM" />}
          {gold.length && <CardsSection cards={gold} type="GOLD" />}
        </>
      ) : (
        <LoadingHome />
      )}
    </>
  );
};

export default ContentSection;
