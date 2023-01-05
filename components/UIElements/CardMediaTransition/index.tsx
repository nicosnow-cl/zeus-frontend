import { a, useTransition, config } from '@react-spring/web';

import IMedia from '../../../interfaces/objects/interface.media';
import NextImage from '../NextImage';

export interface ICardMediaTransitionProps {
  medias: IMedia[];
}

const CardMediaTransition = ({ medias }: ICardMediaTransitionProps) => {
  const [slides, setSlides] = useState();

  const transitions = useTransition(medias, {
    keys: (item: IMedia) => item.id,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div>
      {transitions((style, item) => (
        <a.div key={item.id} style={style}>
          {item.type === 'img' ? (
            <NextImage alt={'media-img'} defaultSrc={item.img?.hq || ''} />
          ) : (
            <video
              autoPlay
              muted
              controls={false}
              src={item.video?.mp4 || ''}
              style={{
                backgroundPosition: 'center',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
                width: '100%',
              }}
            />
          )}
        </a.div>
      ))}
    </div>
  );
};

export default CardMediaTransition;
