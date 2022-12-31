import EscortType from '../../types/type.escort';
import IImage from '../objects/interface.image';
import ILocation from '../objects/interface.location';
import IRrSs from '../objects/interface.rrss';
import ISchedule from '../objects/interface.schedule';
import IVideo from '../objects/interface.video';

interface IProfile {
  active: boolean;
  age: number;
  appareance: string[];
  avatarImg: IImage;
  bannerImg: string;
  description: string;
  gender: string;
  id: number;
  images: IImage[];
  likes: number;
  location: ILocation;
  name: string;
  nationality: string;
  phoneNumber: string;
  price: number;
  rrss: IRrSs[];
  schedule: ISchedule;
  services: string[];
  type: EscortType;
  videos: IVideo[];
}

export default IProfile;
