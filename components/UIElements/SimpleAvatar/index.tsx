import Image from 'next/image';

export interface ISimpleAvatarProps {
  src: string;
  size?: number;
}

const AVATAR_SIZE = 300;

const SimpleAvatar = ({ src, size = AVATAR_SIZE }: ISimpleAvatarProps) => {
  return <Image alt={'asdas'} className={'image'} src={src} fill style={{ borderRadius: '50%' }} />;
};

export default SimpleAvatar;
