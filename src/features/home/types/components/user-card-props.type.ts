import { UserCardEntity } from '../../interfaces/objects/user-card.type'

export type RootProps = {
  children?: React.ReactNode
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

export type ActionsProps = {}
