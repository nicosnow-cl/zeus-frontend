import EscortType from '../../types/type.escort';
import IImage from '../objects/interface.image';
import ILocation from '../objects/interface.location';
import IPrice from '../objects/interface.price';
import IRrSs from '../objects/interface.rrss';
import IVideo from '../objects/interface.video';

interface ICard {
  _id: string;
  active: boolean;
  age: number;
  avatar: IImage;
  createdAt: string;
  description: string;
  escortId: string;
  gender: string;
  hasPromo: boolean;
  likes: number;
  location: ILocation;
  name: string;
  nationality: string;
  price: IPrice;
  returnAt: string;
  rrss: IRrSs[];
  services: string[];
  type: EscortType;
  videos: IVideo[];
}

export default ICard;
