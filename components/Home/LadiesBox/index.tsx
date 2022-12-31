import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import { AppDispatch, RootState } from '../../../redux/store';
import { fpfApi } from '../../../services/index';
import { getEscorts } from '../../../redux/thunks/home/index';
import { Grid } from '@mui/material';
import { IHomeState } from '../../../redux/reducers/home';
import IEscort from '../../../interfaces/states/interface.escort';
import LadyCard from '../../UIElements/LadyCard';
import { IUiState } from '../../../redux/reducers/ui/index';
import LoadingHome from '../LoadingHome';

const LadiesBox = () => {
  const { escorts } = useSelector((state: RootState): IHomeState => state.home);
  const { isLoadingHome } = useSelector((state: RootState): IUiState => state.ui);
  const [cardToShowIdx, setCardToShowIdx] = useState<number | null>(null);
  const [gold, setGold] = useState<IEscort[]>([]);
  const [premium, setPremium] = useState<IEscort[]>([]);
  const [vip, setVip] = useState<IEscort[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect((): void => {
    dispatch(getEscorts());
  }, [dispatch]);

  useEffect((): (() => void) | void => {
    if (!escorts.length) return;

    setVip(escorts.filter((escort) => escort.type === 'VIP'));
    setPremium(escorts.filter((escort) => escort.type === 'PREMIUM'));
    setGold(escorts.filter((escort) => escort.type === 'GOLD'));

    return (): void => {
      setVip([]);
      setPremium([]);
      setGold([]);
    };
  }, [escorts]);

  // useEffect((): void => {
  //   fpfApi
  //     .get('/actors', {
  //       params: {
  //         fields: 'photos',
  //         limit: 50,
  //         page: 1,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   const idx = getCardToShowIdx();
  //   setCardToShowIdx(idx);
  // };

  // const getCardToShowIdx = (): number => {
  //   const cardHeight = cardRef.current?.offsetHeight || 0;
  //   const cardWidth = cardRef.current?.offsetWidth || 0;
  //   const containerWidth = containerRef.current?.offsetWidth || 0;
  //   const colsByRow = Math.ceil(containerWidth / cardWidth);
  //   const y = window.scrollY;
  //   const offset = y / cardHeight;
  //   const row = Math.floor(offset) + 1;
  //   const widthPercentage = Math.round((offset % 1) * 100);
  //   const col = Math.ceil(widthPercentage / (100 / colsByRow));

  //   return (row - 1) * colsByRow + col;
  // };

  // const handleHoverCard = (idx: number) => (isHoverd: boolean) => {
  //   if (isHoverd) setCardToShowIdx(idx);
  //   else handleScroll();
  // };

  console.log('Re render');

  return (
    <Box ref={containerRef}>
      {false ? (
        <>
          <Grid container spacing={[2, 2]}>
            {vip.map((escort, idx) => (
              <Grid ref={idx === 0 ? cardRef : null} key={idx} item xs={12} sm={6} md={4} xl={3}>
                <LadyCard
                  data={escort}
                  // displayMedia={idx === cardToShowIdx}
                  type={`VIP`}
                  // handleHoverCard={handleHoverCard(idx)}
                />
              </Grid>
            ))}
          </Grid>

          <Grid className={`mt-5`} container spacing={[2, 2]}>
            {premium.map((escort, idx) => (
              <Grid key={vip.length + idx} item xs={12} sm={6} md={4} xl={3}>
                <LadyCard
                  data={escort}
                  // displayMedia={vip.length + idx === cardToShowIdx}
                  type={`PREMIUM`}
                  // handleHoverCard={handleHoverCard(vip.length + idx)}
                />
              </Grid>
            ))}
          </Grid>

          <Grid className={`mt-5`} container spacing={[2, 2]}>
            {gold.map((escort, idx) => (
              <Grid key={premium.length + idx} item xs={6} sm={4} md={3} xl={2}>
                <LadyCard type={`GOLD`} data={escort} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <LoadingHome />
      )}
    </Box>
  );
};

export default LadiesBox;
