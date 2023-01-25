import { useContext } from 'react';
import CardActionArea from '@mui/material/CardActionArea';

import { AppContext } from '../../../../pages/_app';
import IMedia from '../../../../interfaces/objects/interface.media';
import MediaContainerBottom from './MediaContainerBottom';
import MediaContainerTop from './MediaContainerTop';
import MediaImage from '../MediaImage';
import MediaVideo from '../MediaVideo';

export interface IMediaContainerProps {
  media?: IMedia;
}

const MediaContainer = ({ media }: IMediaContainerProps) => {
  const { device } = useContext(AppContext);

  const handleImageClick = () => {
    window.open(media?.img?.hq, '_blank');
  };

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
      <MediaContainerTop />

      {media && (
        <CardActionArea
          style={{ maxHeight: '55%', overflow: 'hidden' }}
          onClick={media.type === 'img' ? handleImageClick : undefined}
        >
          {
            {
              img: (
                <MediaImage
                  alt={`media-img-${media._id}`}
                  image={media.img!}
                  style={{ minHeight: '670px' }}
                />
              ),
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
