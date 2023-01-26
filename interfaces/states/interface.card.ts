import EscortType from '../../types/type.escort';
import IImage from '../objects/interface.image';
import ILocation from '../objects/interface.location';
import IMedia from '../objects/interface.media';
import IPrice from '../objects/interface.price';
import IRrSs from '../objects/interface.rrss';

interface ICard {
  _id: string;
  active: boolean;
  age: number;
  appearance: string[];
  avatar: IImage;
  createdAt: string;
  description: string;
  escortId: string;
  gender: string;
  hasPromo: boolean;
  likes: number;
  location: ILocation;
  medias: IMedia[];
  name: string;
  nationality: string;
  price: IPrice;
  returnAt: string;
  rrss: IRrSs[];
  services: string[];
  type: EscortType;
  username: string;
}

export default ICard;
