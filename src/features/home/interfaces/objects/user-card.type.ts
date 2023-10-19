import { IImage } from './interface.image'
import { ILocation } from './interface.location'
import { IMedia } from './interface.media'
import { IPrice } from './interface.price'
import { IRrSs } from './interface.rrss'

export type UserCardEntity = {
  _id: string
  // type: EscortType;
  active: boolean
  age: number
  appearance: string[]
  avatar: IImage
  createdAt: string
  description: string
  escortId: string
  gender: string
  hasPromo: boolean
  likes: number
  location: ILocation
  medias: IMedia[]
  name: string
  nationality: string
  price: IPrice
  returnAt: string
  rrss: IRrSs[]
  services: string[]
  username: string
}
