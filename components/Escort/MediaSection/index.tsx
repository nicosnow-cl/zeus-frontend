import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useRef, useState, useContext } from 'react';
import { useTransition, a } from '@react-spring/web';
import shuffle from 'lodash/shuffle';
import useDebouncedCallback from 'beautiful-react-hooks/useDebouncedCallback';
import useIsFirstRender from 'beautiful-react-hooks/useIsFirstRender';
import useWindowResize from 'beautiful-react-hooks/useWindowResize';

import { AppContext } from '../../../pages/_app';
import { AppDispatch, RootState } from '../../../redux/store';
import { getMediasById } from '../../../redux/thunks/home';
import { uiActions } from '../../../redux/reducers/ui';
import getRandomNumber from '../../../helpers/getRandomNumber';
import IMedia from '../../../interfaces/objects/interface.media';
import MediaSorter from './MediaSorter';
import ProfileMedia from '../../common/ProfileMedia';
import styles from './index.module.scss';

const TRANSITION = {
  keys: (item: IMedia) => item._id,
  from: ({ x, y, width, height }: any) => ({ x, y, width, height, opacity: 0 }),
  enter: ({ x, y, width, height }: any) => ({ x, y, width, height, opacity: 1 }),
  update: ({ x, y, width, height }: any) => ({ x, y, width, height }),
  leave: { height: 0, opacity: 0 },
  config: { mass: 5, tension: 500, friction: 100 },
  trail: 25,
};

export interface IMediaSectionProps {
  id: string;
}

const MediaSection = ({ id }: IMediaSectionProps) => {
  const { router } = useContext(AppContext);
  const [order, setOrder] = useState<'images_first' | 'shuffle' | 'videos_first'>('shuffle');
  const [width, setWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const medias = useSelector((state: RootState) => state.home.medias);
  const dispatch = useDispatch<AppDispatch>();
  const isFirstRender = useIsFirstRender();
  const [heights, gridItems] = useMemo(() => {
    function getColumns(width: number) {
      if (width >= 1000) return 5;
      if (width >= 800) return 3;
      if (width > 400) return 2;
      return 1;
    }

    const columns = getColumns(width);
    const heights = new Array(columns).fill(0);
    const items = (() => {
      const videosMedia = medias.filter((media) => media.type === 'video');
      const imagesMedia = medias.filter((media) => media.type === 'img');
      if (order === 'shuffle') return shuffle([...videosMedia, ...imagesMedia]);
      if (order === 'videos_first') return [...videosMedia, ...imagesMedia];

      return [...imagesMedia, ...videosMedia];
    })();

    const gridItems = items.map((child) => {
      const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const randomHeight =
        child.type === 'video' ? getRandomNumber(400, 650) : getRandomNumber(350, 550);

      const x = (width / columns) * column; // x = container width / number of columns * column index,
      const y = (heights[column] += randomHeight / 2) - randomHeight / 2; // y = it's just the height of the current column

      return { ...child, x, y, width: width / columns, height: randomHeight / 2 };
    });

    return [heights, gridItems];
  }, [medias, order, width]);

  const onWindowResize = useWindowResize();

  useEffect(() => {
    const { current } = containerRef;
    if (!current) return;

    setWidth(current.offsetWidth);
  }, [containerRef]);

  useEffect(() => {
    if (isFirstRender) dispatch(getMediasById(id));
  }, [dispatch, isFirstRender, id]);

  useEffect(() => {
    if (router?.query.key) dispatch(uiActions.handleToggleLadyImage(true));
  }, [dispatch, router]);

  const onWindowResizeHandler = useDebouncedCallback(() => {
    const { current } = containerRef;
    if (!current) return;

    setWidth(current.offsetWidth);
  }, [containerRef]);

  const handleSetMediaId = (id: string) => {
    router?.replace(
      {
        query: { ...router.query, key: id },
      },
      undefined,
      { shallow: true },
    );
  };

  onWindowResize(onWindowResizeHandler);
  const transitions = useTransition(gridItems, TRANSITION);

  console.count('MediaSection render');

  return (
    <>
      <MediaSorter order={order} setOrder={setOrder} />

      <div
        ref={containerRef}
        className={`${styles.mediaContainer}`}
        style={{ height: Math.max(...heights) }}
      >
        {transitions((style, item) => (
          <a.div key={item._id} style={style}>
            {item.type === 'video' ? (
              <ProfileMedia
                onClick={() => handleSetMediaId(item._id)}
                video={item.video}
                type={'video'}
              />
            ) : (
              <ProfileMedia
                onClick={() => handleSetMediaId(item._id)}
                image={item.img}
                type={'img'}
              />
            )}
          </a.div>
        ))}
      </div>
    </>
  );
};

export default MediaSection;
