import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { useTransition, a } from '@react-spring/web';
import shuffle from 'lodash/shuffle';

import { AppDispatch } from '../../../redux/store';
import { homeActions } from '../../../redux/reducers/home';
import { uiActions } from '../../../redux/reducers/ui';
import getRandomNumber from '../../../utils/getRandomNumber';
import IImage from '../../../interfaces/objects/interface.image';
import IMedia from '../../../interfaces/objects/interface.media';
import IVideo from '../../../interfaces/objects/interface.video';
import ProfileMedia from '../../UIElements/ProfileMedia';
import styles from './index.module.scss';
import useMeasure from 'react-use-measure';
import useMedia from '../../../hooks/useMedia';

export interface IMediaSetionProps {
  images: IImage[];
  videos: IVideo[];
}

const mapImgVideosToMedia = (videos: IVideo[], images: IImage[]) => {
  const videosMedia: IMedia[] = videos.map((video, idx) => ({
    id: idx,
    type: 'video',
    video,
  }));

  const imagesMedia: IMedia[] = images.map((img, idx) => ({
    id: idx + videosMedia.length,
    type: 'img',
    img,
  }));

  return [...videosMedia, ...imagesMedia];
};

const MediaSection = ({ images, videos }: IMediaSetionProps) => {
  const [containerRef, { width }] = useMeasure();
  const dispatch = useDispatch<AppDispatch>();

  const columns = useMedia(
    ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
    [5, 3, 2],
    1,
  );
  const items: IMedia[] = useMemo(() => mapImgVideosToMedia(videos, images), [images, videos]);

  const [heights, gridItems] = useMemo(() => {
    const heights = new Array(columns).fill(0);

    const gridItems = shuffle(items).map((child) => {
      const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const randomHeight =
        child.type === 'video' ? getRandomNumber(400, 650) : getRandomNumber(350, 550);

      const x = (width / columns) * column; // x = container width / number of columns * column index,
      const y = (heights[column] += randomHeight / 2) - randomHeight / 2; // y = it's just the height of the current column
      return { ...child, x, y, width: width / columns, height: randomHeight / 2 };
    });

    return [heights, gridItems];
  }, [columns, items, width]);

  const transitions = useTransition(gridItems, {
    key: (item: { css: string; height: number }) => item.css,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  const handleOpenLadyImage = (idx: number) => {
    dispatch(uiActions.handleApplyProfileMedia(idx));
    dispatch(uiActions.handleToggleLadyImage(true));
  };

  if (items.length) {
    dispatch(homeActions.setMedias(mapImgVideosToMedia(videos, images)));
  }

  return (
    <div
      ref={containerRef}
      className={`${styles.mediaContainer}`}
      style={{ height: Math.max(...heights) }}
    >
      {transitions((style, item) => (
        <a.div style={style}>
          {item.type === 'video' ? (
            <ProfileMedia
              onClick={() => handleOpenLadyImage(item.id)}
              src={item.video?.mp4 || ''}
              type={'video'}
            />
          ) : (
            <ProfileMedia
              onClick={() => handleOpenLadyImage(item.id)}
              src={item.img?.lq || ''}
              type={'img'}
            />
          )}
        </a.div>
      ))}
    </div>
  );
};

export default MediaSection;
