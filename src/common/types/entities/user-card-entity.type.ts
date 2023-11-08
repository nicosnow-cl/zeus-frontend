import { Image } from './misc/image.type'
import { Location } from './misc/location.type'
import { Media } from './misc/media.type'
import { Price } from './misc/price.type'
import { SocialNetwork } from './misc/social-network.type'

export type UserCardEntity = {
  _id: string
  // type: EscortType;
  active: boolean
  age: number
  appearance: string[]
  avatar: Image
  createdAt: string
  description: string
  escortId: string
  gender: string
  hasPromo: boolean
  likes: number
  location: Location
  medias: Media[]
  name: string
  nationality: string
  price: Price
  returnAt: string
  rrss?: SocialNetwork[]
  services: string[]
  username: string
}
