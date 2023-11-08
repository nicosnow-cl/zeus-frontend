import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type RootProps = {
  children?: React.ReactNode
  onClik?: () => void
}

export type BackgroundMediaProps = {
  avatar: UserCardEntity['avatar']
  medias?: UserCardEntity['medias']
}

export type AvatarWithNameProps = {
  age?: UserCardEntity['age']
  avatar: UserCardEntity['avatar']
  name?: UserCardEntity['name']
  username: UserCardEntity['username']
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
