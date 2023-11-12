// import EscortType from '../../types/type.escort';

export interface IFiltersForm {
  appareance: { _id: string; name: string; value: string }[]
  city: string
  name: string
  promotion: boolean
  services: { _id: string; name: string; value: string }[]
  // type: '' | EscortType;
  video: boolean
}
