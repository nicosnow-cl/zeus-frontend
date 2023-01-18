import { ObjectId } from 'mongodb';

import EscortType from '../../types/type.escort';
import IImage from '../objects/interface.image';
import ILocation from '../objects/interface.location';
import IPrice from '../objects/interface.price';
import IRrSs from '../objects/interface.rrss';
import ISchedule from '../objects/interface.schedule';
import IVideo from '../objects/interface.video';

interface IProfile {
  _id: ObjectId;
  active: boolean;
  age: number;
  appareance: string[];
  avatar: IImage;
  banner: IImage;
  description: string;
  gender: string;
  hasPromo: boolean;
  height: number;
  images: IImage[];
  likes: number;
  location: ILocation;
  name: string;
  nationality: string;
  phoneNumber: string;
  price: IPrice;
  rrss: IRrSs[];
  schedule: ISchedule;
  services: string[];
  size: string;
  skin: string;
  type: EscortType;
  videos: IVideo[];
  weight: number;
}

export default IProfile;
