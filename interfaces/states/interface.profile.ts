import EscortType from '../../types/type.escort';
import IImage from '../objects/interface.image';
import ILocation from '../objects/interface.location';
import IPrice from '../objects/interface.price';
import IRrSs from '../objects/interface.rrss';
import ISchedule from '../objects/interface.schedule';
import IVideo from '../objects/interface.video';

interface IProfile {
  _id: string;
  active: boolean;
  age: number;
  avatar: IImage;
  banner: IImage;
  breast: string;
  contexture: string;
  description: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  hasPromo: boolean;
  height: number;
  images: IImage[];
  languages: string[];
  likes: number;
  location: ILocation;
  name: string;
  nationality: string;
  phoneNumber: string;
  price: IPrice;
  rear: string;
  rrss: IRrSs[];
  schedule: ISchedule;
  services: string[];
  size: number[];
  skin: string;
  type: EscortType;
  videos: IVideo[];
  waxing: string;
  weight: number;
}

export default IProfile;
