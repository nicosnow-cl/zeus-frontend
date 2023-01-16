import { useDispatch } from 'react-redux';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTransition, a } from '@react-spring/web';
import useDebouncedCallback from 'beautiful-react-hooks/useDebouncedCallback';
import useWindowResize from 'beautiful-react-hooks/useWindowResize';

import { AppDispatch } from '../../../redux/store';
import { homeActions } from '../../../redux/reducers/home';
import { uiActions } from '../../../redux/reducers/ui';
import getRandomNumber from '../../../helpers/getRandomNumber';
import IImage from '../../../interfaces/objects/interface.image';
import IMedia from '../../../interfaces/objects/interface.media';
import IVideo from '../../../interfaces/objects/interface.video';
import mapImgsAndVideosToMedias from '../../../helpers/mapImgsAndVideosToMedias';
import ProfileMedia from '../../UIElements/ProfileMedia';
import styles from './index.module.scss';
import MediaSorter from './MediaSorter';

export interface IMediaSetionProps {
  images: IImage[];
  videos: IVideo[];
}

const TRANSITION = {
  keys: (item: IMedia) => item.id,
  from: ({ x, y, width, height }: any) => ({ x, y, width, height, opacity: 0 }),
  enter: ({ x, y, width, height }: any) => ({ x, y, width, height, opacity: 1 }),
  update: ({ x, y, width, height }: any) => ({ x, y, width, height }),
  leave: { height: 0, opacity: 0 },
  config: { mass: 5, tension: 500, friction: 100 },
  trail: 25,
};

const MediaSection = ({ images, videos }: IMediaSetionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [order, setOrder] = useState<'images_first' | 'shuffle' | 'videos_first'>('shuffle');
  const dispatch = useDispatch<AppDispatch>();
  const items: IMedia[] = useMemo(
    () => mapImgsAndVideosToMedias(images, videos, order),
    [order, images, videos],
  );
  const [heights, gridItems] = useMemo(() => {
    function getColumns(width: number) {
      if (width >= 1000) return 5;
      if (width >= 800) return 3;
      if (width > 400) return 2;
      return 1;
    }

    const columns = getColumns(width);
    const heights = new Array(columns).fill(0);

    const gridItems = items.map((child) => {
      const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const randomHeight =
        child.type === 'video' ? getRandomNumber(400, 650) : getRandomNumber(350, 550);

      const x = (width / columns) * column; // x = container width / number of columns * column index,
      const y = (heights[column] += randomHeight / 2) - randomHeight / 2; // y = it's just the height of the current column

      return { ...child, x, y, width: width / columns, height: randomHeight / 2 };
    });

    return [heights, gridItems];
  }, [items, width]);

  const onWindowResize = useWindowResize();

  useEffect(() => {
    const { current } = containerRef;
    if (!current) return;

    setWidth(current.offsetWidth);
  }, [containerRef]);

  const onWindowResizeHandler = useDebouncedCallback(() => {
    const { current } = containerRef;
    if (!current) return;

    setWidth(current.offsetWidth);
  }, [containerRef]);

  const handleOpenLadyImage = (idx: number) => {
    dispatch(uiActions.handleApplyProfileMedia(idx));
    dispatch(uiActions.handleToggleLadyImage(true));
  };

  if (items.length) {
    dispatch(homeActions.setMedias([...items]));
  }

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
          <a.div key={item.id} style={style}>
            {item.type === 'video' ? (
              <ProfileMedia
                onClick={() => handleOpenLadyImage(item.id)}
                video={item.video}
                type={'video'}
              />
            ) : (
              <ProfileMedia
                onClick={() => handleOpenLadyImage(item.id)}
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
