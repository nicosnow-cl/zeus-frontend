import Image from 'next/image';

export interface ISimpleAvatarProps {
  size?: number;
  src: string;
}

const SimpleAvatar = ({ src, size }: ISimpleAvatarProps) => {
  const props = size ? { height: size, width: size } : { fill: true };

  return (
    <Image
      alt="avatar-img"
      blurDataURL={'https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg'}
      placeholder="blur"
      quality={50}
      src={src}
      style={{ borderRadius: '50%' }}
      {...props}
    />
  );
};

export default SimpleAvatar;
