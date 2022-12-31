import EscortType from '../../types/type.escort';
import IImage from '../objects/interface.image';
import ILocation from '../objects/interface.location';
import IRrSs from '../objects/interface.rrss';
import IVideo from '../objects/interface.video';

interface IEscort {
  active: boolean;
  age: number;
  description: string;
  gender: string;
  id: number;
  img: IImage;
  likes: number;
  location: ILocation;
  name: string;
  nationality: string;
  price: number;
  rrss: IRrSs[];
  services: string[];
  type: EscortType;
  videos: IVideo[];
}

export default IEscort;
