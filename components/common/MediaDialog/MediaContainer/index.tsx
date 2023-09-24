import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardActionArea from '@mui/material/CardActionArea';

import { AppContext } from '../../../../pages/_app';
import IMedia from '../../../../interfaces/objects/interface.media';
import MediaContainerBottom from './MediaContainerBottom';
import MediaTitle from './MediaTitle';
import MediaImage from '../MediaImage';
import MediaVideo from '../MediaVideo';
import { AppDispatch, RootState } from '../../../../redux/store';
import { uiActions } from '../../../../redux/reducers/ui';
import styles from './index.module.scss';

export interface IMediaContainerProps {
  media?: IMedia;
}

const MediaContainer = ({ media }: IMediaContainerProps) => {
  const { device, router } = useContext(AppContext);
  const selected = useSelector((state: RootState) => state.home.selected);
  const [mediaConstrained, setMediaConstrained] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseMediaDialog = () => {
    router?.replace({ query: { ...router.query, key: undefined } }, undefined, { shallow: true });

    dispatch(uiActions.handleToggleLadyImage(false));
  };

  const handleImageClick = () => {
    window.open(media?.img?.hq, '_blank');
  };

  const handleClick = () => setMediaConstrained(!mediaConstrained);

  console.count('MediaContainer render');

  return (
    <div
      className={`d-flex fd-column`}
      style={{
        backgroundColor: '#000',
        color: '#fff',
        height: '100vh',
        maxWidth: 800,
        minWidth: 320,
        width: device?.type === 'mobile' ? '100%' : '75%',
      }}
    >
      {selected && (
        <MediaTitle
          avatar={selected.avatar}
          name={selected.name}
          onClick={handleCloseMediaDialog}
        />
      )}

      {media && (
        <CardActionArea
          className={`${styles.mediaContainer}`}
          sx={{ maxHeight: mediaConstrained ? '55%' : 'inherit', overflow: 'hidden' }}
          onClick={media.type === 'img' ? handleClick : undefined}
        >
          {
            {
              img: <MediaImage alt={`media-img-${media._id}`} image={media.img!} />,
              video: <MediaVideo video={media.video!} />,
            }[media.type]
          }
        </CardActionArea>
      )}

      <MediaContainerBottom
        comments={media?.comments}
        description={media?.description}
        likes={media?.likes}
        publishDate={media?.createdAt}
        style={{ flex: '1 1 auto' }}
      />
    </div>
  );
};

export default MediaContainer;
