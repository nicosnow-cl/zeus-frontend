'use client';

import {
  AspectRatio,
  Avatar,
  Badge,
  Blockquote,
  Box,
  Button,
  Card,
  DropdownMenu,
  Flex,
  Inset,
  Text,
} from '@radix-ui/themes';
import Image from 'next/image';

import { IUserCard } from '../../interfaces/objects/user-card.interface';

export interface IProps {
  user: IUserCard;
}

export const UserCard = ({ user }: IProps) => {
  const { avatar, description } = user;

  return (
    <Box
      className={`*transition-all *duration-150 *ease-linear *hover:scale-[1.01] group relative cursor-pointer border border-gray-6 drop-shadow-md`}
    >
      <Box className="relative h-[600px]">
        <Image
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
      </Box>

      <Box
        p="2"
        className="absolute bottom-0 border-t border-woodsmoke-100/20 bg-woodsmoke-900/20 opacity-0 backdrop-blur-sm backdrop-contrast-100 transition-[bottom,opacity] ease-in-out group-hover:bottom-[36px] group-hover:opacity-100"
        style={{
          textShadow: '2px 2px 3px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Blockquote className="text-woodsmoke-50" color="crimson">
          {description}
        </Blockquote>
      </Box>

      <Flex className="relative bg-gray-4" justify="between" height="7" align="center" p="2">
        <Button size="1">Independencia</Button>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button size="1">Social</Button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content></DropdownMenu.Content>
        </DropdownMenu.Root>

        <Badge radius="full" color="mint" variant="surface" highContrast>
          $155.000 - 1h
        </Badge>
      </Flex>
    </Box>
  );
};
