import EscortType from '../../types/type.escort'

interface IFilters {
  appareance: string[]
  city: string
  name: string
  promotion: boolean
  services: string[]
  type: '' | EscortType
  video: boolean
}

export default IFilters
