'use client';

import { AspectRatio, Avatar, Box, Card, Flex, Inset, Text } from '@radix-ui/themes';
import Image from 'next/image';

import { IUserCard } from '../../interfaces/objects/user-card.interface';

export interface IProps {
  user: IUserCard;
}

export const UserCard = ({ user }: IProps) => {
  const { avatar, description } = user;

  return (
    <Card size="5">
      <Image
        className="z-10"
        alt="img-media"
        blurDataURL={avatar.placeholder}
        fill
        // onError={handleError}
        placeholder="blur"
        quality={75}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={avatar.hq}
        style={{ display: 'block', objectFit: 'cover' }}
      />

      <Box className={`relative z-30`}>
        <Text>{description}</Text>
      </Box>
    </Card>
  );
};
