import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type RootProps = {
  children?: React.ReactNode
  onClik?: (evt: React.MouseEvent<HTMLElement>) => void
}

export type BackgroundMediaProps = {
  avatar: UserCardEntity['avatar']
  medias?: UserCardEntity['medias']
}

export type BodyProps = {
  username: UserCardEntity['username']
  age?: UserCardEntity['age']
  avatar: UserCardEntity['avatar']
  name: UserCardEntity['name']
}

export type AvatarWithNameProps = {
  username: UserCardEntity['username']
  age?: UserCardEntity['age']
  avatar: UserCardEntity['avatar']
  name: UserCardEntity['name']
  showAvatar?: boolean
  showUsername?: boolean
  showUserType?: boolean
  withDropShadow?: boolean
}

export type DescriptionProps = {
  description: UserCardEntity['description']
  services?: UserCardEntity['services']
}

export type ActionsProps = {
  price: UserCardEntity['price']
  location: UserCardEntity['location']
  rrss?: UserCardEntity['rrss']
}
