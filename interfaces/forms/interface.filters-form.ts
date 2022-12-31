import EscortType from '../../types/type.escort';

interface IFiltersForm {
  appareance: { id: number; name: string }[];
  city: string;
  name: string;
  promotion: boolean;
  services: { id: number; name: string }[];
  type: '' | EscortType;
  video: boolean;
}

export default IFiltersForm;
