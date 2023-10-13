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
  Heading,
  Inset,
  Text,
} from '@radix-ui/themes';
import Image from 'next/image';

import { IUserCard } from '../../interfaces/objects/user-card.interface';
import { PatchCheckFillIcon, PersonCircleIcon, SuitHeartFillIcon } from '@/common/icons';

export interface IProps {
  user: IUserCard;
}

const scaleTransition = 'transition-all duration-150 ease-linear group-hover:scale-[1.05]';

export const UserCard = ({ user }: IProps) => {
  // console.log({ user });
  const { avatar, description, services, username, name, age } = user;

  return (
    <div
      className={`group relative cursor-pointer overflow-hidden border border-gray-6 drop-shadow`}
    >
      <Image
        className={`h-[600px] object-cover ${scaleTransition}`}
        alt="img-media"
        blurDataURL={avatar.placeholder}
        fill
        // onError={handleError}
        placeholder="blur"
        quality={75}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={avatar.hq}
      />

      <Flex p="2" justify="between" className="relative h-[600px]">
        <Flex gap="3">
          <Avatar
            className="drop-shadow"
            fallback={<PersonCircleIcon size="15" />}
            variant="solid"
            size="2"
            src={Math.random() > 0.5 ? avatar.lq : 'ww.dolasd.cl'}
          />

          <Flex direction="column">
            <Heading
              className="text-woodsmoke-50"
              as="h5"
              size="5"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}
              highContrast
            >
              {name}, {age}
            </Heading>
            <Text
              className="text-crimson-9"
              size="2"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}
              highContrast
            >
              {username}
            </Text>
          </Flex>
        </Flex>

        <Flex gap="2" direction="column">
          <Badge className="px-2 py-1 text-3" radius="full" variant="surface" highContrast>
            <PatchCheckFillIcon /> VIP
          </Badge>
          <Badge
            className="px-2 py-1 text-2"
            color="tomato"
            radius="full"
            variant="surface"
            highContrast
          >
            <SuitHeartFillIcon /> 2.6k
          </Badge>
        </Flex>
      </Flex>

      <Box
        p="2"
        className="absolute bottom-0 border-t border-woodsmoke-100/20 bg-woodsmoke-900/20 opacity-0 backdrop-blur-sm backdrop-contrast-100 transition-[bottom,opacity] ease-in-out group-hover:bottom-[36px] group-hover:opacity-100"
        style={{
          textShadow: '2px 2px 3px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Blockquote className="text-woodsmoke-50" color="crimson" size="2">
          {description}

          {services.length > 0 && (
            <Flex mt="2" className="max-w-fit" wrap="wrap" gap="1">
              {services.map((svc, idx) => (
                <Badge key={idx} className="text-1" radius="full" color="gray" variant="surface">
                  {svc}
                </Badge>
              ))}
            </Flex>
          )}
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
    </div>
  );
};
